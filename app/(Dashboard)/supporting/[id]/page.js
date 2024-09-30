import React from "react";
import FetchSupporting from "@/components/dashboard/FetchSupporting";

const page = ({ params }) => {
  return <FetchSupporting userId={params.id} />;
};

export default page;
