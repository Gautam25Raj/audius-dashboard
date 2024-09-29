import React from "react";

import FeedItem from "./FeedItems";

const FeedList = ({ tracks }) => {
  return (
    <section className="grid grid-cols-8 gap-3 mb-36">
      {tracks.map((song, index) => (
        <FeedItem
          key={song.id}
          id={song.id}
          songName={song.title}
          songMood={song.mood}
          songImage={
            index % 3 === 0
              ? song.artwork["1000x1000"]
              : song.artwork["480x480"]
          }
          genre={song.genre}
          singer={song.user}
          number={index}
          track={song}
        />
      ))}
    </section>
  );
};

export default FeedList;
