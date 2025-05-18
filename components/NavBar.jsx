"use client";
import React from "react";
import { IoIosHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbReport } from "react-icons/tb";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="h-12 rounded-b-md w-[90%] bg-gray-300 flex justify-center items-center gap-6">
      <Link href={"/"}>
        <IoIosHome />
      </Link>
      <Link href={"/report"}>
        <TbReport />
      </Link>
      <Link href={"/profile"}>
        <CgProfile />
      </Link>
    </div>
  );
};

export default NavBar;
