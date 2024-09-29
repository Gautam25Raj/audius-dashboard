import React from "react";

import ArtistList from "@/components/dashboard/artist/ArtistList";

const getTopArtists = async () => {
  let error = null;
  const userId = "PQR";
  const ids = [
    "WQodo",
    "Q4kR3",
    "AaPXq",
    "Q4QK4",
    "KEWxy",
    "wPJ62",
    "4W2ay",
    "nd3me",
    "KbMEdw9",
    "ndwYP",
    "BZYRA7x",
    "JbElo",
    "bdVd2BP",
    "4oy7E",
    "0EoAm",
    "DEmW7",
    "eAE0q",
    "WadNry0",
    "92d1Q90",
    "PWY7x2X",
    "D97oa",
    "eAJxq",
    "myAkQ",
    "nd6JD",
    "9R1Nj",
    "LKE3y",
    "92pPakO",
    "KK66l",
    "JZv5z",
    "W0vK40o",
    "y7zWZ",
    "YJMR8gk",
    "k4mo3",
    "e4ro4",
    "y8PZP",
    "g493y2p",
    "WgR5dAk",
    "emyw1",
    "PgmXk",
    "PQYXm",
    "ogy5R",
    "DN707",
    "zZP3qbz",
    "07xkj",
    "OgrZQ",
    "Dr1a8",
    "KbZEz",
    "oG33d",
    "n6NMn",
    "ZOVGE",
    "DvVyV",
    "LwQPp",
    "b9KYJ",
    "3AOQE",
    "GE3mm",
    "kZoOdaX",
    "q7PaP6z",
    "qyvdB",
    "DX9Zq",
    "n05l2",
    "nZ5Ee",
    "b9m5J",
    "YY3BBV7",
    "2okzK",
    "2zG7Z",
    "79dBv",
    "BJx8p",
    "E2AjR",
    "d96Zm5M",
    "7lv3v",
    "r4qaV",
    "qE9Vo",
    "DXAJe",
    "WgM8BjK",
    "MgBzK7X",
  ];

  const url = new URL(`${process.env.AUDIUS_API}/users`);
  url.searchParams.append("user_id", userId);
  ids.forEach((id) => url.searchParams.append("id", id));

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: { Accept: "application/json" },
      maxBodyLength: Infinity,
    });

    if (response.status === 200) {
      const data = await response.json();
      return data.data;
    } else {
      error = "No track found";
      return error;
    }
  } catch (err) {
    error = "Failed to fetch track data.";
    return error;
  }
};

const ArtistsPage = async () => {
  const artists = await getTopArtists();

  return (
    <div>
      {artists ? (
        <ArtistList artists={artists} />
      ) : (
        <div className="col-span-8 text-center text-red-500">
          Failed to load artist data.
        </div>
      )}
    </div>
  );
};

export default ArtistsPage;
