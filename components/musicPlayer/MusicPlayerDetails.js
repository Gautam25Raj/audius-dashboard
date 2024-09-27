"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { FaPause, FaPlay } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const MusicPlayerDetails = () => {
  const { currentSong, isPlaying, loading } = useSelector(
    (state) => state.song
  );

  return (
    <div className="flex items-center relative h-full w-1/3">
      <div
        className="p-4 bg-button-gradient text-white rounded-full hover:scale-105 active:scale-100 transition-transform hover:shadow hover:shadow-white/20 absolute z-10 -top-10 left-0"
        disabled={loading}
      >
        <div className="bg-white/20 p-2 rounded-full">
          {loading ? (
            <AiOutlineLoading size={20} className="animate-spin" />
          ) : isPlaying ? (
            <FaPause size={20} />
          ) : (
            <FaPlay size={20} className="translate-x-0.5" />
          )}
        </div>
      </div>

      {currentSong ? (
        <div className="flex items-center gap-3 mt-5 py-4">
          <div className="space-y-3">
            <p className="text-xs uppercase">NOW PLAYING</p>

            <div className="text-lg font-bold truncate w-full max-w-60">
              {currentSong.title}
            </div>
          </div>

          <div className="w-16 h-16 rounded relative">
            <Image
              src={currentSong.artwork["150x150"]}
              alt={currentSong.title}
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 mt-5 py-4">
          <div className="space-y-3">
            <p className="text-xs uppercase">NOW PLAYING</p>

            <div className="text-lg font-bold truncate w-full max-w-60">
              Loading...
            </div>
          </div>

          <div className="w-16 h-16 rounded relative bg-white/40"></div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayerDetails;
