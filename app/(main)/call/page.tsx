"use client";

import { useEffect } from "react";

const Call = () => {
  useEffect(() => {
    window.location.href = "https://calendly.com/duggsquarelogic/call";
  }, []);
  return <div className="fixed top-0 left-0 size-full bg-white z-50"></div>;
};
export default Call;
