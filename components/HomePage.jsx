"use client";
import { Card } from "@mui/material";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbCurrencyTaka, TbReport } from "react-icons/tb";
import { HiDeviceTablet } from "react-icons/hi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Link from "next/link";

const HomePage = ({ devices }) => {
  const tahirDevices = devices.filter(
    (x) => x.send_to === "Retail" && x.issue_by === "Tahir Ahmed"
  );
  const pendingDevices = tahirDevices.filter((x) => !x.is_complete);
  const completedDevices = tahirDevices.filter((x) => x.is_complete);
  const tahirProfit = completedDevices.length * 300 * 0.2;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome, Technician
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Link href="/devices" className="no-underline">
          <Card className="p-6 hover:shadow-lg transition duration-300 bg-white flex flex-col items-center rounded-2xl">
            <HiDeviceTablet className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center">
              Device Info
            </h2>
            <div className="text-center space-y-1 text-base font-medium">
              <p className="text-green-700">
                Installed: {completedDevices.length}
              </p>
              <p className="text-red-700">In Hand: {pendingDevices.length}</p>
            </div>
          </Card>
        </Link>
        <Link href="/report" className="no-underline">
          <Card className="p-6 hover:shadow-lg transition duration-300 bg-white flex flex-col items-center rounded-2xl">
            <TbReport className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center">Report</h2>
          </Card>
        </Link>

        <Card className="p-6 bg-white flex flex-col items-center rounded-2xl shadow-md">
          <FaBangladeshiTakaSign className="h-10 w-10 text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-center">Profit</h2>
          <p className="text-2xl font-bold text-gray-700 flex items-center gap-1">
            {tahirProfit}
            <TbCurrencyTaka className="text-xl" />
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
