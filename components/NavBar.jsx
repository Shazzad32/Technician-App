// "use client";
// import React from "react";
// import { IoIosHome } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import { TbReport } from "react-icons/tb";
// import Link from "next/link";

// const NavBar = () => {
//   return (
//     <div className="lg:hidden  h-12 rounded-b-md w-[90%] bg-gray-300 flex justify-center items-center gap-6">
//       <Link href={"/"}>
//         <IoIosHome />
//       </Link>
//       <Link href={"/report"}>
//         <TbReport />
//       </Link>
//       <Link href={"/profile"}>
//         <CgProfile />
//       </Link>
//     </div>
//   );
// };

// export default NavBar;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbReport } from "react-icons/tb";

const navItems = [
  { href: "/", icon: <IoIosHome size={24} />, label: "Home" },
  { href: "/report", icon: <TbReport size={24} />, label: "Report" },
  { href: "/profile", icon: <CgProfile size={24} />, label: "Profile" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[95%] max-w-md bg-white rounded-2xl shadow-lg p-2 flex justify-around items-center border border-gray-200">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-sm transition-colors duration-200 ${
              isActive ? "text-blue-600 font-bold" : "text-gray-500"
            } hover:text-blue-500`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
