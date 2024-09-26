import React from "react";
import axios from "axios";

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
      const response = await axios.get(url, {
        headers: { Accept: "application/json" },
        maxBodyLength: Infinity,
      });

      if (response.data) {
        if (type === "normal" && response.data.data.length > 0) {
          userData = response.data.data[0];
        } else {
          userData = response.data.data;
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
        <div>
          <h1>{userData.name || "No Name Available"}</h1>
          <p>Handle: {userData.handle || "No Handle Available"}</p>
          <p>Bio: {userData.bio || "No Bio Available"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchUserPage;
