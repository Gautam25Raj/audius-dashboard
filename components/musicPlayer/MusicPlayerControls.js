"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  togglePlayPause,
  nextSong,
  previousSong,
} from "@/redux/slice/songSlice";
import { AiOutlineLoading } from "react-icons/ai";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

import MusicPlayerProgress from "./MusicPlayerProgress";

const MusicPlayerControls = () => {
  const dispatch = useDispatch();

  const { currentSong, isPlaying, loading } = useSelector(
    (state) => state.song
  );

  const handlePlayPause = () => {
    if (currentSong && currentSong.audioElement) {
      if (isPlaying) {
        currentSong.audioElement.pause();
      } else {
        currentSong.audioElement.play();
      }
      dispatch(togglePlayPause());
    }
  };

  const handleNextSong = () => {
    dispatch(nextSong());
  };

  const handlePreviousSong = () => {
    dispatch(previousSong());
  };

  return (
    <div className="w-2/3 max-w-lg mx-auto space-y-4">
      <div className="flex items-center justify-center">
        <button onClick={handlePreviousSong} className="mx-2">
          <FaBackward size={24} className="text-gray-50" />
        </button>

        <button
          onClick={handlePlayPause}
          className="mx-2 bg-black p-2.5 rounded-full"
          disabled={loading}
        >
          <div className="bg-gray-700 p-1.5 rounded-full">
            {loading ? (
              <AiOutlineLoading size={16} className="animate-spin" />
            ) : isPlaying ? (
              <FaPause size={16} />
            ) : (
              <FaPlay size={16} className="translate-x-px" />
            )}
          </div>
        </button>

        <button onClick={handleNextSong} className="mx-2">
          <FaForward size={24} className="text-gray-50" />
        </button>
      </div>

      <MusicPlayerProgress />
    </div>
  );
};

export default MusicPlayerControls;
