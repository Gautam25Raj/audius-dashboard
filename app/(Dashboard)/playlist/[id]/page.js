import { FaArrowLeftLong } from "react-icons/fa6";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlaylistDetails from "@/components/dashboard/playlist/PlaylistDetails";

const getPlaylist = async (id) => {
  try {
    const response = await fetch(
      `https://discoveryprovider.audius.co/v1/playlists/${id}`,
      {
        headers: { Accept: "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch playlist with id: ${id}`);
    }

    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error fetching playlist:", error);
    return null;
  }
};

const PlaylistIDPage = async ({ params }) => {
  const playlist = await getPlaylist(params.id);

  if (!playlist) {
    return (
      <section className="mb-36 w-full">
        <p className="text-red-500">Playlist not found.</p>
      </section>
    );
  }

  return (
    <section className="absolute h-full top-0 -left-11 w-[calc(100%+52px)]">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/3 relative mb-4 md:mb-0 bg-gray-100">
          <Image
            src={
              playlist.artwork
                ? playlist.artwork["1000x1000"]
                : "/default-artwork.png"
            }
            alt={playlist.playlist_name}
            fill
            className="object-cover object-center"
          />
        </div>

        <PlaylistDetails playlist={playlist} />
      </div>
    </section>
  );
};

export default PlaylistIDPage;
