"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ToTopBtn = () => {
  const variants = {
    rest: {
      y: "0%",
    },
    hover: {
      y: "-20%",
    },
  };
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      className="flex items-center gap-6 text-lg font-medium justify-self-center"
    >
      <span>Back to top</span>
      <motion.div variants={variants}>
        <Image src={"/arrow.svg"} alt="Arrow icon" width={20} height={20} className="w-5 h-5 object-contain" />
      </motion.div>
    </motion.button>
  );
};
export default ToTopBtn;
