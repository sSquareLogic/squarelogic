"use client";

import colors from "@/settings/colors";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface IProps {
  name: string;
  link: string;
  path: string;
}

const variants = {
  textRest: {
    color: colors.WHITE,
  },
  textActive: {
    color: colors.ACCENT,
  },
  circleRest: {
    opacity: "0%",
    y: "200%",
  },
  circleActive: {
    opacity: "100%",
    y: "0",
  },
};

const NavLink = ({ path, name, link }: IProps) => {
  const pathname = usePathname();
  return (
    <motion.a
      href={link}
      className="nav-link relative block text-lg font-medium"
      variants={variants}
      initial="textRest"
      animate={pathname.endsWith(path) ? "textActive" : "textRest"}
    >
      {name}
      <motion.div
        className="w-[5px] h-[5px] rounded-full bg-ACCENT absolute top-[calc(50% + 4px)] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        variants={variants}
        initial="circleRest"
        animate={pathname.endsWith(path) ? "circleActive" : "circleRest"}
      ></motion.div>
    </motion.a>
  );
};
export default NavLink;
