"use client";

import { MdSearch } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <div className="p-4 flex items-center justify-between border-b border-gray-200">
      <div className="text-gray-400 font-bold capitalize">
        {pathParts.length > 0
          ? pathParts.map((part, index) => (
              <span key={index}>
                {index > 0 && " / "}
                {index < pathParts.length - 1 ? (
                  <Link
                    href={`/${pathParts.slice(0, index + 1).join("/")}`}
                    className="whitespace-pre-wrap bg-gradient-to-r from-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent"
                  >
                    {part}
                  </Link>
                ) : (
                  part
                )}
              </span>
            ))
          : "Home"}
      </div>

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
