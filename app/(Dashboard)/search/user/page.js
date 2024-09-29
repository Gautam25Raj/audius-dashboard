import React from "react";

import ArtistList from "@/components/dashboard/artist/ArtistList";

const SearchUserPage = async ({ searchParams }) => {
  const { query, type } = searchParams;

  let url = "";
  let error = null;
  let userData = null;

  switch (type) {
    case "id":
      url = `https://discoveryprovider.audius.co/v1/users/${query}`;
      break;
    case "wallet":
      url = `https://discoveryprovider.audius.co/v1/users/wallet/${query}`;
      break;
    case "handle":
      url = `https://discoveryprovider.audius.co/v1/users/handle/${query}`;
      break;
    case "normal":
      url = `https://discoveryprovider.audius.co/v1/users/search?query=${query}`;
      break;
    default:
      error = "Invalid query type.";
  }

  if (url) {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        maxBodyLength: Infinity,
      });

      const data = await response.json();

      if (response.status === 200) {
        if (type === "normal") {
          userData = data.data;
        } else {
          userData = [data.data];
        }
      } else {
        error = "No user found with the given query.";
      }
    } catch (err) {
      error = "Failed to fetch user data.";
    }
  }

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : userData ? (
        <ArtistList artists={userData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchUserPage;
