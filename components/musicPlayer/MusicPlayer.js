"use client";

import React from "react";
import { useSelector } from "react-redux";

import MusicPlayerDetails from "./MusicPlayerDetails";
import MusicPlayerControls from "./MusicPlayerControls";

const MusicPlayer = () => {
  const { currentSong, isPlaying, loading } = useSelector(
    (state) => state.song
  );

  return (
    currentSong && (
      <div className="fixed bottom-0 left-[276px] right-0 bg-gray-400/40 bg-opacity-50 backdrop-blur-md text-white flex items-center justify-between px-10 shadow-lg z-40">
        <MusicPlayerDetails />
        <MusicPlayerControls />
      </div>
    )
  );
};

export default MusicPlayer;
