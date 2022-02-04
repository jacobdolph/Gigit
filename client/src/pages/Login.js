import React, { useEffect } from "react";
import Signup from "../components/Signup";

const SIGNUP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <Signup />;
};

export default SIGNUP;
