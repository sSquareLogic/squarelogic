"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { AnimationContext } from "@/context/AnimationContext";
import Image from "next/image";
import { useContext } from "react";
import { useEffect } from "react";

const MouseFollower = () => {
  const { state } = useContext(AnimationContext);

  const cursorSize = state === "hoveringImage" ? 110 : 24;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [mouse.x, mouse.y, cursorSize]);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="fixed w-8 h-8 bg-BLACK rounded-full pointer-events-none z-50 flex items-center justify-center"
        initial={{
          width: cursorSize,
          height: cursorSize,
        }}
        animate={
          state === "hoveringImage"
            ? {
                width: 110,
                height: 110,
              }
            : {}
        }
        transition={{
          duration: 0.3,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          animate={
            state === "hoveringImage"
              ? {
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                  },
                }
              : {}
          }
        >
          <Image src={"/arrow-big.svg"} alt="Arrow Icon" width={24} height={24} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MouseFollower;
