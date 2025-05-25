// "use client";
// import { Card } from "@mui/material";
// import TotalCollection from "./TotalCollection";

// const Report = () => {
//   return (
//     <div className="flex flex-col justify-center lg:flex lg:flex-row gap-2 p-2">
//       <Card className="w-[98%] lg:w-1/4">
//         <TotalCollection />
//       </Card>
//       <Card className="w-[98%] lg:w-1/4">
//         <TotalCollection />
//       </Card>
//       <Card className="w-[98%] lg:w-1/4">
//         <TotalCollection />
//       </Card>
//       <Card className="w-[98%] lg:w-1/4">
//         <TotalCollection />
//       </Card>
//     </div>
//   );
// };
// export default Report;

"use client";

import { Card } from "@mui/material";
import TotalCollection from "./TotalCollection";

const Report = () => {
  const cardTitles = [
    "Total Collection",
    "Pending Collection",
    "Monthly Summary",
    "District Stats",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cardTitles.map((title, index) => (
        <Card
          key={index}
          className="shadow-md transition-transform hover:scale-[1.02] rounded-xl"
        >
          <TotalCollection title={title} />
        </Card>
      ))}
    </div>
  );
};

export default Report;
