import React from "react";

import FeedItem from "@/components/dashboard/feeds/FeedItems";

const getTracks = async (params) => {
  try {
    let apiUrl = "";

    if (params.type === "id") {
      apiUrl = `${process.env.AUDIUS_API}/tracks/${params.query}`;
    } else if (params.type === "normal") {
      apiUrl = `${process.env.AUDIUS_API}/tracks/search?query=${params.query}`;
    }

    const response = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      maxBodyLength: Infinity,
    });

    if (!response.ok) {
      throw new Error(`Error fetching tracks: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data.data) ? data.data : [data.data];
  } catch (error) {
    console.error("Error fetching track data:", error);
    return [];
  }
};

const SearchTrackPage = async ({ searchParams }) => {
  const tracks = await getTracks(searchParams);

  if (!tracks || tracks.length === 0) {
    return (
      <section className="text-center py-10">
        <p className="text-lg text-gray-500">No tracks found.</p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-8 gap-3 mb-36">
      {tracks.map((song, index) => (
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

export default SearchTrackPage;
