"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useContext, useRef } from "react";

import { AnimationContext } from "@/context/AnimationContext";
import Image from "next/image";
import defaultTransition from "@/settings/transition";
import { useEffect } from "react";

const MouseFollower = () => {
  const { followerState } = useContext(AnimationContext);
  const isLink = followerState === "link";
  const isLoop = followerState === "loop";

  const cursorSize = isLink || isLoop ? 110 : 16;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
      if (ref.current) {
        ref.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [mouse.x, mouse.y, cursorSize]);

  return (
    <div className="max-md:hidden">
      <motion.div
        ref={ref}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="fixed w-4 h-4 bg-WHITE rounded-full pointer-events-none z-50 flex items-center justify-center opacity-0"
        initial={{
          width: cursorSize,
          height: cursorSize,
        }}
        animate={
          isLink || isLoop
            ? {
                width: 110,
                height: 110,
                mixBlendMode: "exclusion",
              }
            : {}
        }
        transition={{ ...defaultTransition, duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ ...defaultTransition, duration: 0.2 }}
          animate={
            isLink
              ? {
                  opacity: 1,
                  transition: { duration: 0.4 },
                }
              : {}
          }
        >
          <Image src={"/arrow-big.svg"} alt="Arrow Icon" width={24} height={24} className="w-6 h-6 object-contain" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MouseFollower;
