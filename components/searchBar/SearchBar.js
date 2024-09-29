"use client";

import { AiOutlineLoading } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import CustomSelect from "../ui/CustomSelect";

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [searchType, setSearchType] = useState("user");
  const [filterType, setFilterType] = useState("id");

  const handleSearchTypeChange = useCallback((type) => {
    setSearchType(type);
    setFilterType("id");
  }, []);

  const handleFilterChange = useCallback((type) => {
    setFilterType(type);
  }, []);

  const handleSearch = useCallback(() => {
    setLoading(true);

    if (query === "") return;

    if (
      filterType === "wallet" &&
      (!query.startsWith("0x") || query.length !== 42)
    ) {
      setError("Invalid wallet address.");
      return;
    }

    if (filterType === "id" && query.startsWith("0x") && query.length == 42) {
      setError("Invalid User Id. Change the filter type to wallet.");
      return;
    }

    router.push(`/search/${searchType}?type=${filterType}&query=${query}`);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [searchType, filterType, query, router]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const filterOptions =
    searchType === "track" || searchType === "playlist"
      ? ["id", "normal"]
      : ["id", "handle", "wallet", "normal"];

  return (
    <div className="space-y-3 max-w-3xl mx-auto w-full">
      <div className="flex items-center rounded-full shadow-md">
        <CustomSelect
          options={["track", "user", "playlist"]}
          value={searchType}
          onChange={handleSearchTypeChange}
          className="rounded-l-full pl-5"
        />

        <CustomSelect
          options={filterOptions}
          value={filterType}
          onChange={handleFilterChange}
          className="border-l-0"
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border-2 border-gray-300 border-l-0 p-2 focus:outline-none focus:ring-2 focus:ring-[#ff2975] focus:border-[#ff2975] w-full h-11"
        />

        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-[#ff2975] to-[#8c1eff] text-white font-bold py-2.5 px-5 shadow transition duration-200 rounded-r-full min-w-24 h-11"
        >
          {loading ? (
            <AiOutlineLoading size={24} className="animate-spin mx-auto" />
          ) : (
            "Search"
          )}
        </button>
      </div>

      {error && <p className="text-red-500 font-medium text-center">{error}</p>}
    </div>
  );
}
