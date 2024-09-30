import Link from "next/link";

import { FiGlobe } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const ArtistSocials = ({ artist }) => {
  return (
    <div className="flex space-x-4 mt-4">
      <Link
        href={
          artist.twitter_handle ? `https://x.com/${artist.twitter_handle}` : "#"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors bg-white 
            ${
              artist.twitter_handle
                ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                : "border-gray-300 text-gray-300 cursor-not-allowed"
            }`}
        >
          <FaTwitter size={20} />
          <span className="absolute bottom-0 -right-2">
            <BsCheckCircleFill
              size={16}
              className={
                artist.verified_with_twitter ? "text-blue-500" : "text-gray-400"
              }
            />
          </span>
        </div>
      </Link>

      <Link
        href={
          artist.instagram_handle
            ? `https://instagram.com/${artist.instagram_handle}`
            : "#"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors bg-white 
            ${
              artist.instagram_handle
                ? "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                : "border-gray-300 text-gray-300 cursor-not-allowed"
            }`}
        >
          <FaInstagram size={20} />
          <span className="absolute bottom-0 -right-2">
            <BsCheckCircleFill
              size={16}
              className={
                artist.verified_with_instagram
                  ? "text-pink-500"
                  : "text-gray-400"
              }
            />
          </span>
        </div>
      </Link>

      <Link
        href={
          artist.tiktok_handle
            ? `https://tiktok.com/@${artist.tiktok_handle}`
            : "#"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors bg-white 
            ${
              artist.tiktok_handle
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-gray-300 text-gray-300 cursor-not-allowed"
            }`}
        >
          <FaTiktok size={20} />
          <span className="absolute bottom-0 -right-2">
            <BsCheckCircleFill
              size={16}
              className={
                artist.verified_with_tiktok ? "text-black" : "text-gray-400"
              }
            />
          </span>
        </div>
      </Link>

      <Link
        href={artist.website ? artist.website : "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors bg-white
            ${
              artist.website
                ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                : "border-gray-300 text-gray-300 cursor-not-allowed"
            }`}
        >
          <FiGlobe size={20} />
          <span className="absolute bottom-0 -right-2">
            <BsCheckCircleFill
              size={16}
              className={
                artist.is_verified ? "text-green-500" : "text-gray-400"
              }
            />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ArtistSocials;
