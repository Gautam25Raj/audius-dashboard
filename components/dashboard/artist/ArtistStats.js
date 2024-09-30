import React from "react";

import Link from "next/link";

const StatCard = ({ title, value, link }) => {
  return (
    <Link
      className="bg-gray-100 p-4 rounded-md shadow-md text-center"
      href={link}
    >
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-base font-bold text-blue-500">{value}</p>
    </Link>
  );
};

const ArtistStats = ({ artist }) => {
  return (
    <div className="flex space-x-6 mt-6 justify-center">
      <StatCard
        title="Followers"
        link={`/followers/${artist.id}`}
        value={artist.follower_count}
      />
      <StatCard
        title="Following"
        link={`/following/${artist.id}`}
        value={artist.followee_count}
      />
      <StatCard
        title="Supporters"
        link={`/supporters/${artist.id}`}
        value={artist.supporter_count}
      />
      <StatCard
        title="Supporting"
        link={`/supporting/${artist.id}`}
        value={artist.supporting_count}
      />
    </div>
  );
};

export default ArtistStats;
