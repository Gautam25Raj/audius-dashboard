"use client";

import React, { useEffect, useState } from "react";
import ArtistList from "@/components/dashboard/artist/ArtistList";
import Pagination from "@/components/ui/Pagination";

const FetchFollowing = ({ userId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [following, setFollowing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 48;

  const fetchFollowing = async (page) => {
    const offset = (page - 1) * limit;
    const url = new URL(
      `https://discoveryprovider.audius.co/v1/users/${userId}/following?limit=${limit}&offset=${offset}`
    );

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFollowing(data.data);
      } else {
        throw new Error("Failed to fetch following");
      }
    } catch (error) {
      console.error(error);
      setFollowing([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowing(currentPage);
  }, [currentPage, userId]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : following.length > 0 ? (
        <>
          <ArtistList artists={following} />
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            hasNextPage={following.length === limit}
          />
        </>
      ) : (
        <div className="col-span-8 text-center text-red-500">
          No users found or failed to load data.
        </div>
      )}
    </div>
  );
};

export default FetchFollowing;
