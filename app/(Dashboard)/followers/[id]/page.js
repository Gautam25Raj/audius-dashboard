import React from "react";
import FetchFollowers from "@/components/dashboard/FetchFollowers";

const page = ({ params }) => {
  return <FetchFollowers userId={params.id} />;
};

export default page;
