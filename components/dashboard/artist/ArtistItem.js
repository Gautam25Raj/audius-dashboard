import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArtistItem = ({ artist }) => {
  return (
    <Link
      href={`/artists/${artist.id}`}
      key={artist.id}
      className="bg-white p-4 rounded shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-60 relative overflow-hidden rounded-lg">
        <Image
          src={artist.profile_picture["480x480"] || "/default-image.png"}
          alt={artist.name}
          fill
          className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 hover:scale-110"
        />
      </div>

      <h2 className="text-lg font-bold mt-3">{artist.name}</h2>
      <p className="text-sm text-gray-500">@{artist.handle}</p>
    </Link>
  );
};

export default ArtistItem;
