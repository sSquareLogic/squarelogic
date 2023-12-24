"use client";

import colors from "@/settings/colors";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";

interface IPlusMinusProps {
  isOpen?: boolean;
}

const PlusMinus = ({ isOpen }: IPlusMinusProps) => {
  return (
    <motion.div
      className="rounded-full w-8 h-8 relative"
      transition={defaultTransition}
      initial={{ background: colors.WHITE, rotate: "0deg" }}
      animate={isOpen ? { background: colors.ACCENT, rotate: "90deg" } : {}}
    >
      <motion.div
        className="absolute h-0.5 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-LIGHTBLACK"
        transition={defaultTransition}
        initial={{ width: 16 }}
        animate={isOpen ? { width: 0 } : {}}
      ></motion.div>
      <div className="absolute w-0.5 h-4 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-LIGHTBLACK"></div>
    </motion.div>
  );
};
export default PlusMinus;
