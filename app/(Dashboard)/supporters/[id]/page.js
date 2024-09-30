import React from "react";
import FetchSupporters from "@/components/dashboard/FetchSupporters";

const page = ({ params }) => {
  return <FetchSupporters userId={params.id} />;
};

export default page;
