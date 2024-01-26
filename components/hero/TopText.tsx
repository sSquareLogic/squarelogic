"use client";

import { motion, useAnimation } from "framer-motion";

import defaultTransition from "@/settings/transition";
import { useEffect } from "react";

interface IProps {
  isBigTextInView: boolean;
  title: string;
}

const TopText = ({ isBigTextInView, title }: IProps) => {
  const animationControl = useAnimation();
  useEffect(() => {
    if (!isBigTextInView) {
      animationControl.start({
        y: "0%",
        rotateX: "0deg",
        opacity: 1,
      });
    } else {
      animationControl.start({
        y: "-100%",
        rotateX: "45deg",
        opacity: 0,
      });
    }
  }, [isBigTextInView, animationControl]);
  return (
    <motion.p
      className="top-text pointer-events-none fixed top-4 left-[50%] uppercase font-bold text-3xl z-[100] text-WHITE mix-blend-difference"
      initial={{
        x: "-50%",
        y: "-100%",
        rotateX: "45deg",
        opacity: 0,
      }}
      animate={animationControl}
      transition={defaultTransition}
    >
      {title}
    </motion.p>
  );
};
export default TopText;
