import React from "react";
import Image from "next/image";

import DashboardNavbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-50 mr-2">
      <div className="flex-1 p-5 h-screen max-w-xs overflow-y-scroll sticky hide-scroll">
        <Sidebar />

        <Image
          src="/pattern.svg"
          alt=""
          width="320"
          height="80"
          className="absolute left-0 bottom-0 z-20"
        />
      </div>

      <div className="flex-1 py-2.5">
        <DashboardNavbar />
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
