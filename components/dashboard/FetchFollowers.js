"use client";

import React, { useEffect, useState } from "react";
import ArtistList from "@/components/dashboard/artist/ArtistList";
import Pagination from "@/components/ui/Pagination";

const FetchFollowers = ({ userId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 48;

  const fetchFollowers = async (page) => {
    const offset = (page - 1) * limit;
    const url = new URL(
      `https://discoveryprovider.audius.co/v1/users/${userId}/followers?limit=${limit}&offset=${offset}`
    );

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFollowers(data.data);
      } else {
        throw new Error("Failed to fetch followers");
      }
    } catch (error) {
      console.error(error);
      setFollowers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowers(currentPage);
  }, [currentPage, userId]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : followers.length > 0 ? (
        <>
          <ArtistList artists={followers} />
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            hasNextPage={followers.length === limit} // Enable next button if we fetched the limit
          />
        </>
      ) : (
        <div className="col-span-8 text-center text-red-500">
          No followers found or failed to load data.
        </div>
      )}
    </div>
  );
};

export default FetchFollowers;
