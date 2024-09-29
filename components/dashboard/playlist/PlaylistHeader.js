import { AiOutlineRetweet } from "react-icons/ai";
import { FaHeart, FaPlay } from "react-icons/fa";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PlaylistHeader = ({ playlist }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-black text-white transform hover:scale-105 transition-transform duration-300 h-96">
      <Image
        src={
          playlist.artwork
            ? playlist.artwork["1000x1000"]
            : "/default-artwork.png"
        }
        alt={playlist.playlist_name}
        fill
        className="w-full h-96 object-cover opacity-60"
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-4xl font-bold mb-2">{playlist.playlist_name}</h3>
          <p className="text-lg mb-4 text-gray-100">
            By: {playlist.user.name || "Unknown Artist"}
          </p>

          <div className="flex space-x-4 text-sm">
            <div className="flex items-center gap-1 font-medium">
              <div className=" bg-white/20 backdrop-blur p-1.5 rounded-full">
                <FaHeart size={20} className="text-red-500 translate-y-px" />
              </div>

              {playlist.favorite_count}
            </div>

            <div className="flex items-center gap-1 font-medium">
              <div className=" bg-white/20 backdrop-blur p-1.5 rounded-full">
                <AiOutlineRetweet size={20} className="text-green-500" />
              </div>

              {playlist.repost_count}
            </div>

            <div className="flex items-center gap-1 font-medium">
              <div className=" bg-white/20 backdrop-blur p-1.5 rounded-full">
                <FaPlay size={20} className="text-blue-500  translate-x-0.5" />
              </div>

              {playlist.total_play_count}
            </div>
          </div>
        </div>

        <Link
          href={`/playlist/${playlist.id}`}
          className="self-start bg-button-gradient text-white py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Playlist
        </Link>
      </div>
    </div>
  );
};

export default PlaylistHeader;
