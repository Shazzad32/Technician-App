import DeviceInfo from "@/components/DeviceInfo";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices`)).data;
  return (
    <div className="h-[100%] w-full flex  p-1">
      <DeviceInfo devices={devices} />
    </div>
  );
};

export default page;
