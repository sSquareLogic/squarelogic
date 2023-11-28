"use client";

import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";

interface IProps {
  isBigTextInView: boolean;
}

const TopText = ({ isBigTextInView }: IProps) => {
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
    <motion.h1
      className="top-text pointer-events-none fixed top-4 left-[50%] text-ACCENT uppercase font-bold text-3xl mix-blend-color-dodge z-[100]"
      initial={{
        x: "-50%",
        y: "-100%",
        rotateX: "45deg",
        opacity: 0,
      }}
      animate={animationControl}
      transition={{
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      }}
    >
      SQUARELOGIC
    </motion.h1>
  );
};
export default TopText;
