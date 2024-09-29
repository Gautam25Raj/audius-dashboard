import React from "react";

import PlaylistList from "@/components/dashboard/playlist/PlaylistList";

const getPlaylists = async (params) => {
  let error = null;
  let playlistsData = null;

  try {
    let apiUrl = "";

    if (params.type === "id") {
      apiUrl = `${process.env.AUDIUS_API}/playlists/${params.query}`;
    } else if (params.type === "normal") {
      apiUrl = `${process.env.AUDIUS_API}/playlists/search?query=${params.query}`;
    }

    const response = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      maxBodyLength: Infinity,
    });

    if (response.status === 200) {
      const data = await response.json();

      if (params.type === "normal" && data.data.length > 0) {
        playlistsData = data.data;
      } else if (params.type === "id" && data.data) {
        playlistsData = data.data;
      }
    } else {
      error = "No playlists found.";
    }
  } catch (err) {
    error = "Failed to fetch playlist data.";
  }

  return { playlistsData, error };
};

const SearchPlaylistPage = async ({ searchParams }) => {
  const { playlistsData } = await getPlaylists(searchParams);

  return <PlaylistList playlists={playlistsData} slice={0} />;
};

export default SearchPlaylistPage;
