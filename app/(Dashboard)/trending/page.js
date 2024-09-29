import React from "react";

import FeedItem from "@/components/dashboard/feeds/FeedItems";
import FeedsContainer from "@/components/dashboard/feeds/FeedsContainer";

const getTrendingSongs = async () => {
  let error = null;

  try {
    const response = await fetch(`${process.env.AUDIUS_API}/tracks/trending`, {
      headers: { Accept: "application/json" },
      maxBodyLength: Infinity,
    });

    if (response.status === 200) {
      const data = await response.json();

      return data.data;
    } else {
      error = "No track found";
    }
  } catch (err) {
    error = "Failed to fetch track data.";
    return error;
  }
};

const TrendingPage = async () => {
  const songs = await getTrendingSongs();

  return <FeedsContainer initialTracks={songs} />;
};

export default TrendingPage;
