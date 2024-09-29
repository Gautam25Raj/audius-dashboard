import React from "react";

const FeedsSkeleton = () => {
  return (
    <section className="grid grid-cols-2 gap-6 mb-36">
      <div className="col-span-2 bg-white p-4 rounded shadow-lg animate-pulse h-[50vh]">
        <div className="w-full h-full bg-gray-300 rounded-lg mb-4"></div>
      </div>

      <div className="bg-white p-4 rounded shadow-lg animate-pulse h-[50vh]">
        <div className="w-full h-full bg-gray-300 rounded-lg mb-4"></div>
      </div>

      <div className="bg-white p-4 rounded shadow-lg animate-pulse h-[50vh]">
        <div className="w-full h-full bg-gray-300 rounded-lg mb-4"></div>
      </div>
    </section>
  );
};

export default FeedsSkeleton;
