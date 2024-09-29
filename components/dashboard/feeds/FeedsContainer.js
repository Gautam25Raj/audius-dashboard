"use client";

import React, { useState, useEffect } from "react";

import FeedList from "./FeedList";
import FeedsSkeleton from "./FeedsSkeleton";

const FeedsContainer = ({ initialTracks }) => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("week");

  const [tracks, setTracks] = useState(initialTracks);

  const fetchTracks = async (timeRange) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://discoveryprovider.audius.co/v1/tracks/trending?time=${timeRange}`,
        {
          headers: { Accept: "application/json" },
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        setTracks(data.data);
      } else {
        console.error("Failed to fetch tracks.");
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTracks(activeTab);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    fetchTracks(tab);
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold">Trending Tracks</h2>

        <div className="flex space-x-4">
          {["week", "month", "year", "all-time"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? "bg-button-gradient shadow text-white"
                  : "bg-gray-200 shadow text-black"
              } hover:bg-button-gradient hover:text-white transition-colors duration-200`}
            >
              {tab === "all-time"
                ? "All Time"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading ? <FeedsSkeleton /> : <FeedList tracks={tracks} />}
    </section>
  );
};

export default FeedsContainer;
