import DeviceInfo from "@/components/DeviceInfo";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices`)).data;
  return (
    <div className="h-full w-full flex items-center justify-center p-1">
      <DeviceInfo devices={devices} />
    </div>
  );
};

export default page;
