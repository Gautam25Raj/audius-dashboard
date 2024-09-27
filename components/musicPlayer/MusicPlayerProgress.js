import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProgress } from "@/redux/slice/songSlice";

const MusicPlayerProgress = () => {
  const dispatch = useDispatch();

  const { currentSong, progress } = useSelector((state) => state.song);

  useEffect(() => {
    if (currentSong && currentSong.audioElement) {
      const updateProgress = () => {
        dispatch(
          setProgress(
            (currentSong.audioElement.currentTime /
              currentSong.audioElement.duration) *
              100
          )
        );
      };

      currentSong.audioElement.addEventListener("timeupdate", updateProgress);

      return () => {
        currentSong.audioElement.removeEventListener(
          "timeupdate",
          updateProgress
        );
      };
    }
  }, [currentSong, dispatch]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.target;
    const rect = progressBar.getBoundingClientRect();

    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;

    dispatch(setProgress(newProgress));

    if (currentSong && currentSong.audioElement) {
      currentSong.audioElement.currentTime =
        (newProgress / 100) * currentSong.audioElement.duration;
    }
  };

  return (
    <div className="flex items-center w-full mx-4">
      <span className="text-sm text-gray-50">
        {currentSong
          ? formatTime(currentSong.audioElement.currentTime)
          : "0:00"}
      </span>

      <div
        className="relative mx-2 flex-grow h-2 bg-gray-200 rounded cursor-pointer"
        onClick={handleProgressClick}
      >
        <div
          className="absolute top-0 left-0 h-full bg-button-gradient rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <span className="text-sm text-gray-50">
        {currentSong ? formatTime(currentSong.audioElement.duration) : "0:00"}
      </span>
    </div>
  );
};

export default MusicPlayerProgress;
