import { FaRetweet, FaMusic, FaDollarSign, FaListUl } from "react-icons/fa";

const StatCards = ({ artist }) => {
  return (
    <div className="flex gap-4">
      <StatCard
        icon={<FaRetweet size={24} className="text-blue-500" />}
        title="Reposts"
        value={artist.repost_count}
      />

      <StatCard
        icon={<FaMusic size={24} className="text-blue-500" />}
        title="Tracks"
        value={artist.track_count}
      />

      <StatCard
        icon={<FaDollarSign size={24} className="text-blue-500" />}
        title="Audio Balance"
        value={`$${artist.total_audio_balance}`}
      />

      <StatCard
        icon={<FaListUl size={24} className="text-blue-500" />}
        title="Playlists"
        value={artist.playlist_count}
      />
    </div>
  );
};

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl min-w-36 p-6 flex flex-col items-start text-center">
      <div className="mb-16">{icon}</div>

      <h3 className="text-gray-500 text-sm font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default StatCards;
