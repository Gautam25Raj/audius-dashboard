import React from "react";

const SearchTrackPage = ({ searchParams }) => {
  console.log(searchParams);

  return <div>{searchParams.query}</div>;
};

export default SearchTrackPage;
