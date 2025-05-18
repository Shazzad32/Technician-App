import { Card } from "@mui/material";
import React from "react";
import { district } from "@/data";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiDeviceTablet } from "react-icons/hi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="relative">
      <h1 className="text-3xl font-bold relative flex">Hi, Techinician </h1>
      <div className="flex flex-col items-center gap-4 justify-center mt-10 p-2">
        {" "}
        <Card className="h-30 w-3/4 bg-gray-300 flex flex-col justify-center items-center">
          <h1 className="text-center font-extrabold text-xl">Device In hand</h1>
          <HiDeviceTablet className="h-10 w-10 text-red-300" />
          <p className="text-center font-extrabold text-xl mt-2">
            {district.length}
          </p>
        </Card>
        <Card className="h-30 w-3/4 bg-gray-300 flex flex-col justify-center items-center">
          <h1 className="text-center font-extrabold text-xl">Installed</h1>
          <IoIosCheckmarkCircle className="h-10 w-10 text-green-300" />
          <p className="text-center font-extrabold text-xl mt-2">
            {district.length - 20}
          </p>
        </Card>
        <Card className="h-30 w-3/4 bg-gray-300 flex flex-col justify-center items-center">
          <h1 className="text-center font-extrabold text-xl">Profit</h1>
          <FaBangladeshiTakaSign className="h-7 w-7 text-red-400" />
          <p className="text-center font-extrabold text-xl mt-2 flex items-center">
            4500
            <TbCurrencyTaka />
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
