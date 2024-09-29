import React from "react";

import PlaylistHeader from "@/components/dashboard/playlist/PlaylistHeader";
import PlaylistContainer from "@/components/dashboard/playlist/PlaylistContainer";

const getTrendingPlaylists = async () => {
  let error = null;

  try {
    const response = await fetch(
      `${process.env.AUDIUS_API}/playlists/trending`,
      {
        headers: { Accept: "application/json" },
        maxBodyLength: Infinity,
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      return data.data;
    } else {
      error = "No playlists found";
      return error;
    }
  } catch (err) {
    error = "Failed to fetch playlist data.";
    return error;
  }
};

const HomePage = async () => {
  const playlists = await getTrendingPlaylists();

  return (
    <section className="space-y-12 mb-36">
      {Array.isArray(playlists) && playlists.length > 0 ? (
        <>
          <PlaylistHeader playlist={playlists[0]} />

          <PlaylistContainer initialPlaylists={playlists} />
        </>
      ) : (
        <div className="text-center text-red-500">
          {playlists ? playlists : "Failed to load playlists data."}
        </div>
      )}
    </section>
  );
};

export default HomePage;
