import React from "react";
import Image from "next/image";

import ArtistStats from "@/components/dashboard/artist/ArtistStats";
import ArtistSocials from "@/components/dashboard/artist/ArtistsSocials";
import StatCards from "@/components/dashboard/artist/StatCard";
import PickedTrack from "@/components/dashboard/artist/PickedTrack";

const getArtist = async (id) => {
  try {
    const response = await fetch(
      `https://discoveryprovider.audius.co/v1/users/${id}`,
      { headers: { Accept: "application/json" } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch artist");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const ArtistIDPage = async ({ params }) => {
  const artist = await getArtist(params.id);

  if (!artist) {
    return <p>Failed to load artist data.</p>;
  }

  return (
    <section className="w-full">
      <div className="relative w-full h-40 md:h-64 lg:h-80 bg-gray-300 rounded-xl">
        <Image
          src={artist.cover_photo["2000x"] || "/default-cover.jpg"}
          alt={artist.name + " cover"}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex items-center mx-10 justify-between -translate-y-24">
        <Image
          src={artist.profile_picture["480x480"] || "/default-profile.png"}
          alt={artist.name}
          width={180}
          height={180}
          className="object-cover rounded-full border-4 border-white shadow"
        />

        <ArtistSocials artist={artist} />
      </div>

      <div className="-translate-y-40 mx-10">
        <ArtistStats artist={artist} />

        <div className="mt-6">
          <div className="flex gap-4 items-end">
            <h1 className="text-3xl font-bold text-gray-900">{artist.name}</h1>

            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                {artist.is_verified ? "Verified" : "Not Verified"}
              </span>
            </div>
          </div>

          <p className="text-gray-500 text-base">@{artist.handle}</p>
          <p className="text-gray-500 text-base">{artist.erc_wallet}</p>

          {artist.bio && (
            <p className="mt-4 text-gray-700 text-base leading-relaxed">
              {artist.bio}
            </p>
          )}
        </div>

        <div className="mt-10 flex gap-6 items-start">
          <StatCards artist={artist} />

          <PickedTrack artistPickTrackId={artist.artist_pick_track_id} />
        </div>
      </div>
    </section>
  );
};

export default ArtistIDPage;
