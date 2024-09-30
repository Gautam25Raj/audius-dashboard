"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import PlayButton from "@/components/ui/PlayButton";
import Image from "next/image";

const PickedTrack = ({ artistPickTrackId }) => {
  if (!artistPickTrackId)
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start relative space-y-4 w-full">
        <h2 className="text-2xl mb-2 font-bold">Artist Pick Up</h2>
        None
      </div>
    );
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await axios.get(
          `https://discoveryprovider.audius.co/v1/tracks/${artistPickTrackId}`
        );
        console.log(response.data.data);
        setTrack(response.data.data);
      } catch (err) {
        setError("Error fetching track details");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    if (artistPickTrackId) {
      fetchTrack();
    }
  }, [artistPickTrackId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!track) return <p>No track found.</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start relative space-y-4">
      <h2 className="text-2xl mb-2 font-bold">Artist Pick Up</h2>
      <div className="w-40 h-40 relative">
        <Image
          src={track.artwork["480x480"] || "/default-artwork.png"}
          alt={track.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold">{track.title}</h2>

        <p className="text-gray-600">
          By: {track.user?.name || "Unknown Artist"}
        </p>

        <p className="text-gray-500">
          {formatDuration(track.duration)} | {track.playback_count} plays
        </p>
      </div>

      <p className="mt-2 text-gray-800 line-clamp-3">
        {track.description || "No description available."}
      </p>

      <div className="absolute top-3 right-6">
        <PlayButton id={track.id} track={track} className="mt-4" />
      </div>
    </div>
  );
};

const formatDuration = (duration) => {
  if (!duration) return "0:00";
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default PickedTrack;
