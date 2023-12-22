"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface IProps {
  onClick?: () => void;
  link?: string;
  name: string;
  width?: "w-full" | "w-fit";
}

const AnimatedButton = ({ name, onClick, link, width = "w-fit" }: IProps) => {
  const variants = {
    rest: {
      height: "0%",
      borderRadius: 999999,
    },
    active: {
      height: "101%",
      borderRadius: 70,
    },
  };
  return link ? (
    <Link href={link || "/"}>
      <motion.div
        onClick={onClick}
        initial="rest"
        whileHover="active"
        className={`relative ${width} py-4 px-6 rounded-[70px] border-WHITE border-solid border text-lg font-medium`}
      >
        <span className={`block ${width === "w-full" ? "text-center" : "text-left"}`}>{name}</span>
        <motion.div
          variants={variants}
          className={`absolute top-[50%] left-0 w-full h-0 -translate-y-[50%] bg-WHITE text-BLACK z-[51] flex items-center justify-center overflow-hidden pointer-events-none ${
            width === "w-full" ? "text-center" : "text-left"
          }`}
        >
          {name}
        </motion.div>
      </motion.div>
    </Link>
  ) : (
    <motion.button
      onClick={onClick}
      type="button"
      initial="rest"
      whileHover="active"
      className={`relative ${width} py-4 px-6 rounded-[70px] border-WHITE border-solid border text-lg font-medium`}
    >
      <span className={`block ${width === "w-full" ? "text-center" : "text-left"}`}>{name}</span>
      <motion.div
        variants={variants}
        className={`absolute top-[50%] left-0 w-full h-0 -translate-y-[50%] bg-WHITE text-BLACK z-[51] flex items-center justify-center overflow-hidden pointer-events-none ${
          width === "w-full" ? "text-center" : "text-left"
        }`}
      >
        {name}
      </motion.div>
    </motion.button>
  );
};
export default AnimatedButton;
