"use client";

import { IoMdTime } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlaylistTrackSkeleton from "./PlaylistTrackSkeleton";

import {
  setCurrentSong,
  togglePlayPause,
  setLoading,
  clearLoading,
} from "@/redux/slice/songSlice";

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const PlaylistDetailsTracks = ({ playlistId }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [tracks, setTracks] = useState(null);

  const [loadingTrackId, setLoadingTrackId] = useState(null);

  const { currentSong, isPlaying } = useSelector((state) => state.song);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          `https://discoveryprovider.audius.co/v1/playlists/${playlistId}/tracks`
        );

        if (response.status === 200) {
          const data = await response.json();
          setTracks(data.data);
        } else {
          throw new Error("Failed to fetch playlist");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlaylist();
  }, [playlistId]);

  const handlePlayPause = async (track) => {
    const trackId = track.id;

    if (loadingTrackId !== null) return;

    setLoadingTrackId(trackId);
    dispatch(setLoading());

    if (trackId && (!currentSong || currentSong.id !== trackId)) {
      if (currentSong && currentSong.audioElement) {
        currentSong.audioElement.pause();
        dispatch(togglePlayPause(false));
      }

      const audioElement = new Audio(
        `https://discoveryprovider.audius.co/v1/tracks/${trackId}/stream`
      );

      audioElement.oncanplaythrough = () => {
        dispatch(
          setCurrentSong({
            id: trackId,
            artwork: { ...track.artwork },
            title: track.title,
            genre: track.genre,
            mood: track.mood,
            tags: track.tags || "",
            audioElement,
          })
        );

        dispatch(clearLoading());
        setLoadingTrackId(null);
        dispatch(togglePlayPause(true));
        audioElement.play();
      };

      audioElement.onerror = () => {
        setLoadingTrackId(null);
        dispatch(clearLoading());
      };
    } else if (currentSong && currentSong.audioElement) {
      if (isPlaying && currentSong.id === trackId) {
        currentSong.audioElement.pause();
        dispatch(togglePlayPause(false));
      } else {
        currentSong.audioElement.play();
        dispatch(togglePlayPause(true));
      }
      setLoadingTrackId(null);
    }
  };

  return (
    <div className="bg-white flex-1 px-6 py-2 flex flex-col overflow-hidden">
      <div className="flex justify-between items-center border-b border-gray-200 px-8">
        <div className="font-semibold mb-2 flex items-center gap-4 text-gray-600">
          <span className="text-3xl">#</span>
          {currentSong?.title || "No song playing"}
        </div>

        <IoMdTime size={24} className="text-gray-600" />
      </div>

      {error ? (
        <div>Error: {error}</div>
      ) : tracks ? (
        <ul className="flex-1 overflow-y-scroll">
          {tracks.map((track) => {
            const isCurrentTrack = currentSong && currentSong.id === track.id;
            return (
              <li
                key={track.id}
                className={`text-gray-700 p-2 flex justify-between items-center rounded-lg hover:bg-gray-100 cursor-pointer ${
                  isCurrentTrack ? "bg-blue-100" : ""
                }`}
                onClick={() => handlePlayPause(track)}
              >
                <div className="flex items-center">
                  <img
                    src={track.artwork["1000x1000"] || track.artwork["480x480"]}
                    alt={track.title}
                    className="w-12 h-12 rounded-lg mr-4 bg-gray-100"
                  />

                  <div>
                    <h3 className="text-lg font-semibold">{track.title}</h3>
                    <p className="text-gray-600">{track.user.name}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-600 mr-4">
                    {formatDuration(track.duration)}
                  </p>

                  {loadingTrackId === track.id ? (
                    <AiOutlineLoading size={24} className="animate-spin" />
                  ) : isPlaying && isCurrentTrack ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <PlaylistTrackSkeleton />
      )}
    </div>
  );
};

export default PlaylistDetailsTracks;
