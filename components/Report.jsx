"use client";
import { Card } from "@mui/material";
import TotalCollection from "./TotalCollection";

const Report = () => {
  return (
    <div className="flex flex-col justify-center lg:flex lg:flex-row gap-2 p-2">
      <Card className="w-[98%] lg:w-1/4">
        <TotalCollection />
      </Card>
      <Card className="w-[98%] lg:w-1/4">
        <TotalCollection />
      </Card>
      <Card className="w-[98%] lg:w-1/4">
        <TotalCollection />
      </Card>
      <Card className="w-[98%] lg:w-1/4">
        <TotalCollection />
      </Card>
    </div>
  );
};
export default Report;
