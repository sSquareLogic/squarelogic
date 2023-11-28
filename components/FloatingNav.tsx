"use client";

import { Variants, motion } from "framer-motion";
import { useContext, useState } from "react";

import { AnimationContext } from "@/context/AnimationContext";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

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
  {
    name: "About",
    link: "/about",
    path: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
    path: "/contact",
  },
];

const variants = {
  navInitial: {
    left: "50%",
    x: "-50%",
    opacity: 0,
  },
  navActive: {
    left: "50%",
    x: "-50%",
    opacity: 1,
  },
};

const findPathName = (path: string): string | undefined => {
  return navLinks.find((el) => el.path === path)?.name;
};

const FloatingNav = () => {
  const pathname = usePathname();

  const currentPage = findPathName(pathname) || "";

  const [hoveredTab, setHoveredTab] = useState<string>(currentPage);

  const { setFollowerState } = useContext(AnimationContext);
  return (
    <motion.nav
      className="floating-nav bg-NAV max-w-fit py-[18.5px] fixed bottom-[25px] rounded-[54px] backdrop-blur-sm z-[100] left-[50%] -translate-x-[50%]"
      onMouseEnter={() => setFollowerState("hoveringNav")}
      onMouseLeave={() => {
        setFollowerState("default");
        setTimeout(() => {
          setHoveredTab(findPathName(pathname) || "");
        }, 200);
      }}
    >
      <div className="px-10 flex items-center gap-6">
        {navLinks.map((link, i) => (
          <motion.div
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
                transition={{
                  type: "tween",
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              ></motion.div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};
export default FloatingNav;
