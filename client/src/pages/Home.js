import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Home from "../components/Home";
import { QUERY_ME_BASIC, QUERY_GIGS } from "../utils/queries";

const HOME = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <Home />;
};

export default HOME;
