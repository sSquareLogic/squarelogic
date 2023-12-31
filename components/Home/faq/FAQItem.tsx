"use client";

import { IFAQ } from "@/sanity/schemas/home";
import PlusMinus from "./PlusMinus";
import { PortableText } from "@portabletext/react";
import colors from "@/settings/colors";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";

type FAQItemListType = IFAQ["items"][any];

interface IFAQItemProps extends FAQItemListType {
  position: number;
}

const FAQItem = ({ answer, position, question }: IFAQItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(position === 0);
  const breakpoints = {
    sm: useMediaQuery("(max-width: 640px)"),
    md: useMediaQuery("(max-width: 768px)"),
  };

  return (
    <div
      className="bg-LIGHTBLACK p-10 rounded-3xl flex flex-col cursor-pointer max-sm:p-8 max-[450px]:p-6"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-10 justify-between max-sm:gap-8 max-[450px]:gap-6">
        <motion.h2
          className="text-2xl font-bold max-[450px]:text-xl"
          transition={defaultTransition}
          initial={{ color: colors.WHITE }}
          animate={isOpen ? { color: colors.ACCENT } : {}}
        >
          {question}
        </motion.h2>
        <PlusMinus isOpen={isOpen} />
      </div>
      <motion.div
        className="text-WHITE leading-[120%] overflow-hidden text-lg max-[450px]:text-base"
        transition={defaultTransition}
        initial={{ opacity: 0, height: 0, marginTop: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "fit-content", marginTop: breakpoints.sm ? 24 : breakpoints.md ? 32 : 40 } : {}
        }
      >
        <PortableText value={answer} />
      </motion.div>
    </div>
  );
};
export default FAQItem;
