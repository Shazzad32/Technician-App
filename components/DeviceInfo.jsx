// "use client";
// import React, { useState } from "react";

// const DeviceInfo = ({ devices }) => {
//   const [state, setState] = useState({
//     data: [...devices],
//   });

//   const inHandDevice = state.data.filter(
//     (x) =>
//       x.send_to === "Retail" &&
//       x.issue_by === "Tahir Ahmed" &&
//       x.is_complete === false
//   );

//   return (
//     <div className="w-full h-full p-2 flex flex-col items-center">
//       <div className="w-full max-w-full bg-white rounded-2xl shadow-md overflow-hidden">
//         <div className="bg-amber-500 text-white grid grid-cols-2 sm:grid-cols-2 px-4 py-3 text-sm sm:text-base font-semibold uppercase">
//           <h1>Device ID</h1>
//           <h1>Device Type</h1>
//         </div>
//         <div className="max-h-[80vh] overflow-y-auto divide-y divide-gray-200">
//           {inHandDevice.length > 0 ? (
//             inHandDevice.map((item, i) => (
//               <div
//                 key={i}
//                 className="grid grid-cols-2 sm:grid-cols-2 px-4 py-3 text-sm sm:text-base bg-white hover:bg-gray-50"
//               >
//                 <p className="truncate">{item.device_id}</p>
//                 <p className="truncate">{item.device_type}</p>
//               </div>
//             ))
//           ) : (
//             <div className="px-4 py-6 text-center text-gray-500">
//               No devices found.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeviceInfo;
"use client";
import React, { useState } from "react";

const DeviceInfo = ({ devices }) => {
  const [state] = useState({ data: [...devices] });
  const [filterStatus, setFilterStatus] = useState("not_complete");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDevices = state.data.filter((x) => {
    const isRetailIssuedByTahir =
      x.send_to === "Retail" && x.issue_by === "Tahir Ahmed";

    const statusMatch =
      filterStatus === "not_complete"
        ? x.is_complete === false
        : x.is_complete === true;

    const searchMatch =
      x.device_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      x.device_type.toLowerCase().includes(searchTerm.toLowerCase());

    return isRetailIssuedByTahir && statusMatch && searchMatch;
  });

  return (
    <div className="w-full h-[100%] p-2 flex flex-col items-center">
      <div className="w-full max-w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 bg-gray-100">
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-md font-semibold ${
                filterStatus === "not_complete"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => setFilterStatus("not_complete")}
            >
              Not Complete
            </button>
            <button
              className={`px-4 py-2 rounded-md font-semibold ${
                filterStatus === "complete"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600"
              }`}
              onClick={() => setFilterStatus("complete")}
            >
              Complete
            </button>
          </div>
          Device = {filteredDevices.length}
          <input
            type="text"
            placeholder="Search by ID or Type"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="bg-amber-500 text-white grid grid-cols-3 px-4 py-3 text-sm sm:text-base font-semibold uppercase">
          <h1>Device ID</h1>
          <h1>Device Type</h1>
          <h1>Status</h1>
        </div>
        <div className="flex-1 max-h-[65vh] overflow-y-auto divide-y divide-gray-200">
          {filteredDevices.length > 0 ? (
            filteredDevices.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 px-4 py-3 text-sm sm:text-base bg-white hover:bg-gray-50"
              >
                <p className="truncate">{item.device_id}</p>
                <p className="truncate">{item.device_type}</p>
                <p className="truncate font-medium">
                  {item.is_complete ? (
                    <span className="text-green-600">Done</span>
                  ) : (
                    <span className="text-red-500">Panding</span>
                  )}
                </p>
              </div>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-gray-500">
              No devices found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceInfo;
