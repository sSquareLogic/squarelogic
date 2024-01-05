"use client";

import CursorHover from "../animated/CursorHover";
import NavLink from "./NavLink";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    link: "/",
    path: "/",
  },
  {
    name: "Projects",
    link: "/projects",
    path: "/projects",
  },
  // {
  //   name: "About",
  //   link: "/about",
  //   path: "/about",
  // },
  {
    name: "Contact",
    link: "/contact_us",
    path: "/contact_us",
  },
];

const findPathName = (path: string): string | undefined => {
  return navLinks.find((el) => el.path === path)?.name;
};

const FloatingNav = () => {
  const pathname = usePathname();

  const currentPage = findPathName(pathname) || "";

  const [hoveredTab, setHoveredTab] = useState<string>(currentPage);
  return (
    <CursorHover state="disabled">
      <motion.nav
        className="floating-nav bg-NAV max-w-fit py-[18.5px] fixed bottom-[25px] rounded-[54px] backdrop-blur-sm z-40 left-[50%] -translate-x-[50%]"
        transition={defaultTransition}
      >
        <div className="px-10 flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              transition={defaultTransition}
              key={i}
              className="relative"
              onMouseOver={() => {
                setHoveredTab(link.name);
              }}
            >
              <NavLink name={link.name} link={link.link} path={link.path} />
              {hoveredTab === link.name ? (
                <motion.div
                  layout
                  className="w-[5px] h-[5px] rounded-full bg-ACCENT absolute top-[100%] left-[50%] -translate-x-[50%]"
                  layoutId="circle"
                  transition={defaultTransition}
                ></motion.div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </CursorHover>
  );
};
export default FloatingNav;
