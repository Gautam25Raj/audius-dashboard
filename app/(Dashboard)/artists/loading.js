import React from "react";

const Loading = () => {
  const skeletonItems = Array(8).fill(null);

  return (
    <section className="grid grid-cols-4 gap-3 mb-36">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow-lg animate-pulse"
        >
          <div className="w-full h-60 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      ))}
    </section>
  );
};

export default Loading;
