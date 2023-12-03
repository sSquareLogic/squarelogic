"use client";

import { AnimationProps, motion } from "framer-motion";

import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  duration?: number;
  delay?: number;
  initial?: AnimationProps["initial"];
  inView?: any;
}
const defaultInitial = {
  y: "10%",
  opacity: "0%",
};
const defaultInView = {
  y: "0%",
  opacity: "100%",
};

const defaultDuration = 0.7;
const defaultDelay = 0;

const AnimateInView = ({
  children,
  delay = defaultDelay,
  duration = defaultDuration,
  inView = defaultInView,
  initial = defaultInitial,
}: IProps) => {
  return (
    <motion.div
      className="animate-in-view"
      initial={initial}
      viewport={{ once: true }}
      whileInView={inView}
      transition={{
        type: "tween",
        ease: "easeOut",
        delay: delay,
        duration: duration,
      }}
    >
      {children}
    </motion.div>
  );
};
export default AnimateInView;
