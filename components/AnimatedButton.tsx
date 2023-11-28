"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface IProps {
  onClick?: () => void;
  link?: string;
  name: string;
}

const AnimatedButton = ({ name, onClick, link }: IProps) => {
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
        className="relative w-fit py-4 px-6 rounded-[70px] border-BLACK border-solid border text-BLACK text-lg font-medium"
      >
        {name}
        <motion.div
          variants={variants}
          className="absolute top-[50%] left-0 w-full h-0 -translate-y-[50%] bg-BLACK text-WHITE z-[51] flex items-center justify-center overflow-hidden pointer-events-none"
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
      className="relative w-fit py-4 px-6 rounded-[70px] border-BLACK border-solid border text-BLACK text-lg font-medium"
    >
      {name}
      <motion.div
        variants={variants}
        className="absolute top-[50%] left-0 w-full h-0 -translate-y-[50%] bg-BLACK text-WHITE z-[51] flex items-center justify-center overflow-hidden pointer-events-none"
      >
        {name}
      </motion.div>
    </motion.button>
  );
};
export default AnimatedButton;
