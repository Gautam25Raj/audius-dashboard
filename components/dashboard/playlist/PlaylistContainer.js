"use client";

import React, { useState, useEffect } from "react";
import PlaylistList from "./PlaylistList";

const PlaylistContainer = ({ initialPlaylists }) => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("week");

  const [playlists, setPlaylists] = useState(initialPlaylists);

  const fetchPlaylists = async (timeRange) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://discoveryprovider.audius.co/v1/playlists/trending?time=${timeRange}`,
        {
          headers: { Accept: "application/json" },
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        setPlaylists(data.data);
      } else {
        console.error("Failed to fetch playlists.");
      }
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPlaylists(activeTab);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    fetchPlaylists(tab);
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold">Trending Playlists</h2>
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

      {loading ? (
        <div className="text-center my-4">
          <span className="text-lg font-semibold">Loading Playlists...</span>
        </div>
      ) : (
        <PlaylistList playlists={playlists} />
      )}
    </section>
  );
};

export default PlaylistContainer;
