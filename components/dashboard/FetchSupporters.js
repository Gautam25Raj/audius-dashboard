"use client";

import React, { useEffect, useState } from "react";
import ArtistList from "@/components/dashboard/artist/ArtistList";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import Image from "next/image";

const FetchSupporters = ({ userId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [supporters, setSupporters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 48;

  const fetchSupporters = async (page) => {
    const offset = (page - 1) * limit;
    const url = new URL(
      `https://discoveryprovider.audius.co/v1/users/${userId}/supporters?limit=${limit}&offset=${offset}`
    );

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSupporters(data.data);
        console.log(data.data[0].sender.profile_picture["480x480"]);
      } else {
        throw new Error("Failed to fetch supporters");
      }
    } catch (error) {
      console.error(error);
      setSupporters([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSupporters(currentPage);
  }, [currentPage, userId]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : supporters.length > 0 ? (
        <>
          <section className="grid grid-cols-4 gap-3 mb-36">
            {supporters.map((artist) => (
              <Link
                href={`/artists/${artist.sender.id}`}
                key={artist.sender.id}
                className="bg-white p-4 rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-60 relative overflow-hidden rounded-lg">
                  <Image
                    src={
                      artist.sender.profile_picture
                        ? artist.sender.profile_picture["480x480"]
                        : "https://via.placeholder.com/150"
                    }
                    alt={artist.sender.name}
                    fill
                    className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <h2 className="text-lg font-bold mt-3">{artist.sender.name}</h2>
                <p className="text-sm text-gray-500">@{artist.sender.handle}</p>
              </Link>
            ))}
          </section>

          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            hasNextPage={supporters.length === limit} // Enable next button if we fetched the limit
          />
        </>
      ) : (
        <div className="col-span-8 text-center text-red-500">
          No supporters found or failed to load data.
        </div>
      )}
    </div>
  );
};

export default FetchSupporters;
