"use client";

import { motion, useScroll } from "framer-motion";

import { ReactNode } from "react";
import colors from "@/settings/colors";
import defaultTransition from "@/settings/transition";

interface IProps {
  children: ReactNode;
}

const ScrollProgress = ({ children }: IProps) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: colors.WHITE,
          transformOrigin: "0%",
          zIndex: 100,
          height: 3,
          mixBlendMode: "exclusion",
        }}
        transition={defaultTransition}
      ></motion.div>
      {children}
    </>
  );
};

export default ScrollProgress;
