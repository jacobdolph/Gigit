import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import "./pages.css";

const WELCOME = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <Welcome />;
};

export default WELCOME;
