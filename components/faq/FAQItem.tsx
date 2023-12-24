"use client";

import PlusMinus from "./PlusMinus";
import colors from "@/settings/colors";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";
import { useState } from "react";

export interface IFAQItem {
  title: string;
  description: string;
}

const FAQItem = ({ description, title }: IFAQItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-LIGHTBLACK p-10 rounded-3xl flex flex-col cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center gap-10 justify-between">
        <motion.h2
          className="text-2xl font-bold"
          transition={defaultTransition}
          initial={{ color: colors.WHITE }}
          animate={isOpen ? { color: colors.ACCENT } : {}}
        >
          {title}
        </motion.h2>
        <PlusMinus isOpen={isOpen} />
      </div>
      <motion.p
        className="text-WHITE leading-[120%] overflow-hidden"
        transition={defaultTransition}
        initial={{ opacity: 0, height: 0, marginTop: 0 }}
        animate={isOpen ? { opacity: 1, height: "fit-content", marginTop: 40 } : {}}
      >
        {description}
      </motion.p>
    </div>
  );
};
export default FAQItem;
