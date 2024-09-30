"use client";

import React from "react";

const Pagination = ({ currentPage, onPageChange, hasNextPage }) => {
  const handlePageChange = (page) => {
    if (page >= 1) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mr-2 px-4 py-2 bg-blue-500 text-white rounded-md`}
      >
        Previous
      </button>
      <span className="mx-2">Page {currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
        className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded-md`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
