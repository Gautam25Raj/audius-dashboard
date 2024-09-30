"use client";

import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentSong,
  togglePlayPause,
  setLoading,
  clearLoading,
} from "@/redux/slice/songSlice";

const FeedPlayButton = ({ id, track }) => {
  const dispatch = useDispatch();

  const { currentSong, isPlaying, loading } = useSelector(
    (state) => state.song
  );
  const [currentLoading, setCurrentLoading] = useState(false);

  const handlePlayPause = () => {
    if (id && (!currentSong || currentSong.id !== id)) {
      if (currentSong && currentSong.audioElement) {
        currentSong.audioElement.pause();
      }

      const audioElement = new Audio(
        `https://discoveryprovider.audius.co/v1/tracks/${id}/stream`
      );

      dispatch(setLoading());
      setCurrentLoading(true);

      audioElement.oncanplaythrough = () => {
        dispatch(
          setCurrentSong({
            id,
            artwork: { ...track.artwork },
            title: track.title,
            genre: track.genre,
            mood: track.mood,
            tags: track.tags || "",
            audioElement,
          })
        );

        dispatch(clearLoading());
        setCurrentLoading(false);

        dispatch(togglePlayPause(true));
        audioElement.play();
      };
    } else if (currentSong && currentSong.audioElement) {
      if (isPlaying && currentSong.id === id) {
        currentSong.audioElement.pause();
        dispatch(togglePlayPause(false));
      } else {
        currentSong.audioElement.play();
        dispatch(togglePlayPause(true));
      }
    }
  };

  return (
    <button
      onClick={handlePlayPause}
      className={`p-3 border rounded-full bg-white/20 border-white absolute top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2 hover:opacity-80`}
      disabled={currentLoading}
    >
      {currentLoading ? (
        <AiOutlineLoading size={24} className="animate-spin text-white" />
      ) : isPlaying && currentSong?.id === id ? (
        <FaPause size={24} className="text-white" />
      ) : (
        <FaPlay size={24} className="translate-x-0.5 text-white" />
      )}
    </button>
  );
};

export default FeedPlayButton;
