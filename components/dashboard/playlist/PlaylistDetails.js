import { IoMdCreate } from "react-icons/io";
import { PiPlaylistBold } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";

import React from "react";
import Link from "next/link";

import PlaylistDetailsTracks from "./PlaylistDetailsTracks";

const PlaylistDetails = ({ playlist }) => {
  return (
    <div className="w-full md:w-2/3 bg-gray-200 h-screen flex flex-col">
      <div className="p-6">
        <Link href="/playlist">
          <FaArrowLeftLong
            size={40}
            className="p-2.5 rounded-full bg-white w-fit"
          />
        </Link>

        <div className="space-y-5 mt-10">
          <p className="text-xl uppercase text-gray-600">Playlist</p>
          <h2 className="text-6xl font-medium text-black">
            {playlist.playlist_name}
          </h2>
        </div>

        <div className="mt-8 flex gap-5 items-center text-gray-600">
          <p className="font-semibold flex gap-3 items-center">
            <IoMdCreate size={20} /> {playlist.user.name || "Unknown Artist"}
          </p>

          <p className="flex items-center gap-3">
            <PiPlaylistBold size={20} />
            {playlist.track_count} Tracks | {playlist.favorite_count} Favorites
            | {playlist.repost_count} Reposts
          </p>
        </div>
      </div>

      <PlaylistDetailsTracks playlistId={playlist.id} />
    </div>
  );
};

export default PlaylistDetails;
