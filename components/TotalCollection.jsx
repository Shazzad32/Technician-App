// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { district } from "@/data";

// export default function TotalCollection() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="p-2">
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         <h1> Total Collection</h1>
//         {isExpanded ? (
//           <ChevronUp className="w-5 h-5" />
//         ) : (
//           <ChevronDown className="w-5 h-5" />
//         )}
//       </div>

//       {isExpanded && (
//         <div className="mt-2 max-h-60 overflow-y-auto space-y-1">
//           {district.map((item, i) => (
//             <p key={i} className="pl-2 text-sm">
//               ➤ {item}
//             </p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { district } from "@/data";

export default function TotalCollection({ title = "Total Collection" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-4">
      <div
        className="flex justify-between items-center cursor-pointer select-none transition-colors hover:text-blue-600"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </div>

      {isExpanded && (
        <div className="mt-3 max-h-60 overflow-y-auto space-y-1">
          {district.map((item, index) => (
            <p key={index} className="pl-2 text-sm text-gray-700">
              ➤ {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
