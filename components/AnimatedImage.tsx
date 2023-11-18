"use client";

import { PropsWithChildren, useContext } from "react";

import { AnimationContext } from "@/context/AnimationContext";
import { motion } from "framer-motion";

const AnimatedImage = ({ children }: PropsWithChildren) => {
  const { setState } = useContext(AnimationContext);
  return (
    <motion.div
      className="overflow-hidden border-transparent rounded-[4px]"
      initial={{ borderWidth: 0 }}
      whileHover={{ borderWidth: 5 }}
      transition={{ type: "tween", duration: 0.3 }}
      onMouseOver={() => setState("hoveringImage")}
      onMouseLeave={() => setState("default")}
    >
      <motion.div
        className="rounded-[4px] overflow-hidden"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.005 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
export default AnimatedImage;
