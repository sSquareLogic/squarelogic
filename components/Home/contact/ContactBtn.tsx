"use client";

import AnimatedButton from "@/components/animated/AnimatedButton";
import { useMediaQuery } from "usehooks-ts";

const ContactBtn = () => {
  const breakpoints = {
    md: useMediaQuery("(max-width: 768px)"),
  };
  return (
    <AnimatedButton
      width={breakpoints.md ? "w-full" : "w-fit"}
      name="squarelogic.business@gmail.com"
      link="mailto:squarelogic.business@gmail.com"
    />
  );
};
export default ContactBtn;
