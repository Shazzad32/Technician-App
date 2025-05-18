"use client";
import { Card } from "@mui/material";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import { HiDeviceTablet } from "react-icons/hi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Link from "next/link";

const HomePage = ({ devices }) => {
  console.log("dd", devices);
  const tahirDevice = devices.filter(
    (x) =>
      x.send_to == "Retail" &&
      x.issue_by == "Tahir Ahmed" &&
      x.is_complete == false
  );
  const installDevice = devices.filter(
    (x) => x.send_to == "Retail" && x.issue_by == "Tahir Ahmed" && x.is_complete
  );
  const tahirProfit = installDevice.length * 300 * 0.2;

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold relative flex">Hi, Techinician </h1>
      <div className="flex flex-col items-center gap-4 justify-center mt-10 p-2">
        <Link
          href={"/devices"}
          className="h-30 w-3/4 shadow-md flex flex-col justify-center items-center"
        >
          <h1 className="text-center font-extrabold text-xl">Device In hand</h1>
          <HiDeviceTablet className="h-10 w-10 text-red-300" />
          <p className="text-center font-extrabold text-xl mt-2">
            {tahirDevice.length}
          </p>
        </Link>
        <Card className="h-30 w-3/4 bg-gray-300 flex flex-col justify-center items-center">
          <h1 className="text-center font-extrabold text-xl">Installed</h1>
          <IoIosCheckmarkCircle className="h-10 w-10 text-green-300" />
          <p className="text-center font-extrabold text-xl mt-2">
            {installDevice.length}
          </p>
        </Card>
        <Card className="h-30 w-3/4 bg-gray-300 flex flex-col justify-center items-center">
          <h1 className="text-center font-extrabold text-xl">Profit</h1>
          <FaBangladeshiTakaSign className="h-7 w-7 text-red-400" />
          <p className="text-center font-extrabold text-xl mt-2 flex items-center">
            {tahirProfit}
            <TbCurrencyTaka />
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
