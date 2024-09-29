import React from "react";
import ArtistItem from "./ArtistItem";

const ArtistList = ({ artists }) => {
  return (
    <section className="grid grid-cols-4 gap-3 mb-36">
      {artists.map((artist) => (
        <ArtistItem artist={artist} key={artist.id} />
      ))}
    </section>
  );
};

export default ArtistList;
