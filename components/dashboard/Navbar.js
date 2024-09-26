"use client";

import { MdSearch } from "react-icons/md";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const pageTitle = pathname.split("/").pop();

  return (
    <div className="p-4 flex items-center justify-between border-b border-gray-200">
      <div className="text-gray-400 font-bold capitalize">{pageTitle}</div>

      <Link
        href="/"
        className="flex gap-2 px-5 py-2.5 bg-button-gradient rounded-full shadow-md text-white"
      >
        <MdSearch size={24} />
        Search
      </Link>
    </div>
  );
};

export default DashboardNavbar;
