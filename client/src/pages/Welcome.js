import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Welcome from "../components/Welcome";
import { QUERY_GIGS } from "../utils/queries";

const WELCOME = () => {
  const { loading, data } = useQuery(QUERY_GIGS);
  const thoughts = data?.gigs || [];
  console.log(thoughts);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <Welcome />;
};

export default WELCOME;
