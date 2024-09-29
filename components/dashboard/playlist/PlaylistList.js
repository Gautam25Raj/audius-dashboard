import React from "react";

import PlaylistItem from "./PlaylistItem";

const PlaylistList = ({ playlists, slice = 1 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {playlists.slice(slice).map((playlist) => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default PlaylistList;
