"use client";

import colors from "@/settings/colors";
import defaultTransition from "@/settings/transition";
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
};

const NavLink = ({ path, name, link }: IProps) => {
  const pathname = usePathname();
  return (
    <motion.a
      href={link}
      className="nav-link block text-lg font-medium font-INTER -tracking-[1%]"
      variants={variants}
      initial="textRest"
      transition={defaultTransition}
      animate={pathname.endsWith(path) ? "textActive" : "textRest"}
    >
      {name}
    </motion.a>
  );
};
export default NavLink;
