"use client";
import React, { useState } from "react";

const DeviceInfo = ({ devices }) => {
  const [state, setState] = useState({
    data: [...devices],
  });

  const inHandDevice = state.data.filter(
    (x) =>
      x.send_to == "Retail" &&
      x.issue_by == "Tahir Ahmed" &&
      x.is_complete == false
  );

  console.log("ddd", inHandDevice);
  return (
    <div className="h-[100%] w-[100%] flex flex-col items-center">
      <div className="h-[5%] w-full bg-gray-200 grid grid-cols-[repeat(2,1fr)] items-center px-2">
        <h1>Device id</h1>
        <h1>Device Type</h1>
      </div>
      <div className="h-[80%] w-full">
        {inHandDevice.map((item, i) => {
          return (
            <div className="grid grid-cols-[repeat(2,1fr)] items-center p-2 overflow-scroll">
              <p>{item.device_id}</p>
              <p>{item.device_type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeviceInfo;
