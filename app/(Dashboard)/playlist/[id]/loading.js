import { FaArrowLeftLong } from "react-icons/fa6";

import React from "react";
import Link from "next/link";

const Loading = () => {
  return (
    <section className="absolute h-full top-0 -left-11 w-[calc(100%+52px)] bg-white">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/3 relative mb-4 md:mb-0 bg-gray-100 animate-pulse">
          <div className="w-full h-full bg-gray-300 rounded-md"></div>
        </div>

        <div className="w-full md:w-2/3 bg-gray-200 h-screen flex flex-col animate-pulse">
          <div className="p-6">
            <Link href="/playlist">
              <FaArrowLeftLong
                size={40}
                className="p-2.5 rounded-full bg-white w-fit"
              />
            </Link>

            <div className="space-y-5 mt-10">
              <div className="w-28 h-6 bg-gray-300 rounded"></div>
              <div className="w-full h-12 bg-gray-300 rounded"></div>
            </div>

            <div className="mt-8 flex gap-5 items-center text-gray-600">
              <div className="w-44 h-6 bg-gray-300 rounded"></div>
              <div className="w-64 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
