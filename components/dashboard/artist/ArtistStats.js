import React from "react";

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-base font-bold text-blue-500">{value}</p>
    </div>
  );
};

const ArtistStats = ({ artist }) => {
  return (
    <div className="flex space-x-6 mt-6 justify-center">
      <StatCard title="Followers" value={artist.follower_count} />
      <StatCard title="Following" value={artist.followee_count} />
      <StatCard title="Supporters" value={artist.supporter_count} />
      <StatCard title="Supporting" value={artist.supporting_count} />
    </div>
  );
};

export default ArtistStats;
