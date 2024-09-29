import React from "react";

import FeedItem from "@/components/dashboard/feeds/FeedItems";

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

  return (
    <section className="grid grid-cols-8 gap-3 mb-36">
      {songs.map((song, index) => (
        <FeedItem
          key={song.id}
          id={song.id}
          songName={song.title}
          songMood={song.mood}
          songImage={
            index % 3 === 0
              ? song.artwork["1000x1000"]
              : song.artwork["480x480"]
          }
          genre={song.genre}
          singer={song.user}
          number={index}
          track={song}
        />
      ))}
    </section>
  );
};

export default TrendingPage;
