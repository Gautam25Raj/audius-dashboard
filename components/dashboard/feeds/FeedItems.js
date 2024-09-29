import Image from "next/image";

import FeedDetails from "./FeedDetails";
import FeedPlayButton from "./FeedPlayButton";

const FeedItem = ({
  id,
  songName,
  songMood,
  songImage,
  genre,
  singer,
  number,
  track,
}) => {
  return (
    <div
      className={`h-[50vh] w-full relative rounded-lg bg-black ${
        number % 3 == 0 ? "col-span-8" : "col-span-4"
      }`}
    >
      <Image
        src={songImage ? songImage : "/song-photos/song-photo-1.png"}
        fill
        alt={songName}
        className="rounded-lg object-cover opacity-70"
      />

      <div className="flex justify-between items-center px-6 py-9">
        <FeedDetails
          id={singer.id}
          singerImage={singer.profile_picture["150x150"]}
          songName={songName}
          singerName={singer.name}
          genre={`${genre} / ${songMood}`}
        />
      </div>

      <FeedPlayButton id={id} track={track} />
    </div>
  );
};

export default FeedItem;
