"use client";

import CursorHover from "./CursorHover";
import Link from "next/link";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";

interface IProps {
  onClick?: () => void;
  link?: string;
  name: string;
  width?: "w-full" | "w-fit";
  type?: "button" | "submit";
}

const AnimatedButton = ({ name, onClick, link, width = "w-fit", type }: IProps) => {
  const variants = {
    rest: {
      height: "0%",
    },
    active: {
      height: "100%",
    },
  };
  return link ? (
    <CursorHover>
      <Link href={link || "/"}>
        <motion.div
          onClick={onClick}
          initial="rest"
          whileHover="active"
          transition={defaultTransition}
          className={`relative ${width} px-6 py-4 rounded-[70px] border-WHITE border-solid border text-lg font-medium`}
        >
          <span className={`block ${width === "w-full" ? "text-center" : "text-left"}`}>{name}</span>
          <motion.div
            variants={variants}
            transition={defaultTransition}
            className={`absolute top-[50%] rounded-[70px] left-0 w-full h-0 -translate-y-[50%] bg-WHITE text-BLACK flex items-center justify-center overflow-hidden pointer-events-none ${
              width === "w-full" ? "text-center" : "text-left"
            }`}
          >
            {name}
          </motion.div>
        </motion.div>
      </Link>
    </CursorHover>
  ) : (
    <motion.button
      onClick={onClick}
      type={type}
      initial="rest"
      whileHover="active"
      transition={defaultTransition}
      className={`relative ${width} py-4 px-6 rounded-[70px] border-WHITE border-solid border text-lg font-medium`}
    >
      <span className={`block ${width === "w-full" ? "text-center" : "text-left"}`}>{name}</span>
      <motion.div
        variants={variants}
        transition={defaultTransition}
        className={`absolute top-[50%] left-0 rounded-[70px] w-full h-0 -translate-y-[50%] bg-WHITE text-BLACK flex items-center justify-center overflow-hidden pointer-events-none ${
          width === "w-full" ? "text-center" : "text-left"
        }`}
      >
        {name}
      </motion.div>
    </motion.button>
  );
};
export default AnimatedButton;
