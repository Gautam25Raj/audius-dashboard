import React from "react";
import Image from "next/image";

import PlayButton from "@/components/ui/PlayButton";

const getTopTrack = async () => {
  let error = null;

  try {
    const response = await fetch(`${process.env.AUDIUS_API}/tracks/E7vZwEr`, {
      headers: { Accept: "application/json" },
      maxBodyLength: Infinity,
    });

    if (response.status === 200) {
      const data = await response.json();

      return data.data;
    } else {
      error = "No track found";
    }
  } catch (err) {
    error = "Failed to fetch track data.";
    return error;
  }
};

const TopTrackHeader = async () => {
  const track = await getTopTrack();

  return (
    <div className="w-full h-80 relative rounded-2xl shadow">
      <div className="w-full h-full absolute top-0 left-0 rounded-2xl">
        <Image
          src={track.artwork["1000x1000"]}
          fill
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 rounded-2xl"></div>
      </div>

      <div className="relative h-full w-full z-10 text-white p-8 flex justify-between">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-2">
            <p className="text-3xl font-bold">{track.title}</p>

            <p className="">
              <span>Plays:</span>
              <span className="text-xl font-medium"> {track.play_count}</span>
            </p>
          </div>

          <div className="mt-auto">
            <PlayButton id={track.id} />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div></div>
          <div className="relative z-10 flex gap-3 mr-4">
            <div className="w-14 h-14 relative rounded-full border-4 border-white">
              <Image
                src={track.user.profile_picture["150x150"]}
                fill
                className="rounded-full object-contain"
              />
            </div>

            <div className="max-w-52">
              <p className="text-xl font-medium capitalize truncate">
                {track.user.name}
              </p>

              <div className="flex gap-1">
                <span>Followers: </span>
                <p>{track.user.follower_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTrackHeader;
