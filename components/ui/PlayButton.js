"use client";

import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentSong,
  togglePlayPause,
  setLoading,
  clearLoading,
} from "@/redux/slice/songSlice";

const PlayButton = ({ id, track }) => {
  const dispatch = useDispatch();
  const { currentSong, isPlaying, loading } = useSelector(
    (state) => state.song
  );

  useEffect(() => {
    if (id && (!currentSong || currentSong.id !== id)) {
      const audioElement = new Audio(
        `https://discoveryprovider.audius.co/v1/tracks/${id}/stream`
      );

      dispatch(setLoading());
      audioElement.oncanplaythrough = () => {
        dispatch(
          setCurrentSong({
            id,
            artwork: { ...track.artwork },
            title: track.title,
            genre: track.genre,
            mood: track.mood,
            tags: track.tags,
            audioElement,
          })
        );
        dispatch(clearLoading());
      };
    }
  }, [id, currentSong, dispatch]);

  const handlePlayPause = () => {
    if (currentSong && currentSong.audioElement) {
      if (isPlaying && currentSong.id === id) {
        currentSong.audioElement.pause();
      } else {
        currentSong.audioElement.play();
      }
      dispatch(togglePlayPause());
    }
  };

  return (
    <button
      onClick={handlePlayPause}
      className="p-5 mt-4 bg-black text-white rounded-full hover:scale-105 active:scale-100 transition-transform hover:shadow hover:shadow-white/20"
      disabled={loading}
    >
      {loading ? (
        <AiOutlineLoading size={24} className="animate-spin" />
      ) : isPlaying && currentSong?.id === id ? (
        <FaPause size={24} />
      ) : (
        <FaPlay size={24} className="translate-x-0.5" />
      )}
    </button>
  );
};

export default PlayButton;
