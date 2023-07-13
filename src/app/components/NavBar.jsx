import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-3xl md:w-screen">
      <nav className="flex justify-between mx-auto  bg-blue-600 text-white items-center p-6 ">
        <Link href={"/"} className="font-semibold">
          {" "}
          ECG Meter Capturing
        </Link>
        <Link href={"/capture"} className="font-bold"> Capture Report</Link>
      </nav>
    </div>
  );
};

export default NavBar;
