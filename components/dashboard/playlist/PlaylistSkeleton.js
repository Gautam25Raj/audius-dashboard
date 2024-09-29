import React from "react";

const PlaylistSkeleton = () => {
  const skeletonItems = Array(8).fill(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="w-64 h-auto p-3 bg-white relative overflow-visible shadow-md rounded-xl animate-pulse"
        >
          <div className="h-40 w-full bg-gray-200 rounded-md mb-4"></div>

          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>

          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

          <div className="flex justify-between items-center w-full pt-2 border-t border-gray-300 text-sm text-gray-600">
            <div className="flex items-center gap-1 font-medium">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-8 bg-gray-200 rounded"></div>
            </div>

            <div className="flex items-center gap-1 font-medium">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-8 bg-gray-200 rounded"></div>
            </div>

            <div className="flex items-center gap-1 font-medium">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-8 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="mt-4 h-10 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistSkeleton;
