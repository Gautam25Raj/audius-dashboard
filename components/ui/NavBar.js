import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-12 mt-4">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="rounded-full"
      />

      <Link
        href="/home"
        className="bg-gradient-to-r from-[#ff2975] to-[#8c1eff] text-white font-bold py-2.5 px-5 shadow transition duration-200 rounded-full"
      >
        Go to Home
      </Link>
    </nav>
  );
};

export default NavBar;
