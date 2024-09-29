import { AiOutlineRetweet } from "react-icons/ai";
import { FaHeart, FaPlay } from "react-icons/fa";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PlaylistItem = ({ playlist }) => {
  return (
    <div className="w-64 h-auto p-3 bg-white relative overflow-visible shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-xl">
      <div className="h-40 w-full bg-gray-200 rounded-md transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-6 hover:scale-125 hover:shadow-2xl overflow-hidden relative">
        <Image
          src={
            playlist.artwork
              ? playlist.artwork["480x480"]
              : "/default-artwork.png"
          }
          alt={playlist.playlist_name}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pt-6">
        <p className="font-extrabold text-lg leading-tight text-gray-800 text-nowrap whitespace-nowrap truncate">
          {playlist.playlist_name}
        </p>
        <p className="text-sm pb-3 text-gray-500">
          By: {playlist.user.name || "Unknown Artist"}
        </p>
      </div>

      <div className="flex justify-between items-center w-full pt-2 border-t border-gray-300 text-sm text-gray-600">
        <div className="flex items-center gap-1 font-medium">
          <div className="p-1.5 rounded-full">
            <FaHeart size={20} className="text-red-500 translate-y-px" />
          </div>

          {playlist.favorite_count}
        </div>

        <div className="flex items-center gap-1 font-medium">
          <div className="p-1.5 rounded-full">
            <AiOutlineRetweet size={20} className="text-green-500" />
          </div>

          {playlist.repost_count}
        </div>

        <div className="flex items-center gap-1 font-medium">
          <div className="p-1.5 rounded-full">
            <FaPlay size={20} className="text-blue-500  translate-x-0.5" />
          </div>

          {playlist.total_play_count}
        </div>
      </div>

      <div className="mt-4">
        <Link
          href={`/playlist/${playlist.id}`}
          className="block text-center bg-button-gradient text-white py-2 rounded-lg transition-colors duration-300"
        >
          View Playlist
        </Link>
      </div>
    </div>
  );
};

export default PlaylistItem;
