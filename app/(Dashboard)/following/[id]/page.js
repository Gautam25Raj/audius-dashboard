import React from "react";
import FetchFollowing from "@/components/dashboard/FetchFollowing";

const page = ({ params }) => {
  return <FetchFollowing userId={params.id} />;
};

export default page;
