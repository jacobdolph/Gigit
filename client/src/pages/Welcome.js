import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Welcome from "../components/Welcome";
import { QUERY_GIGS } from "../utils/queries";

const WELCOME = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <Welcome />;
};

export default WELCOME;
