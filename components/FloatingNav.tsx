import NavLink from "./NavLink";

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

const FloatingNav = () => {
  return (
    <nav className="floating-nav bg-NAV flex items-center gap-6 px-10 py-[18.5px] fixed left-[50%] -translate-x-[50%] bottom-[25px] rounded-[54px] backdrop-blur-sm z-50">
      {navLinks.map((link, i) => (
        <NavLink key={i} name={link.name} link={link.link} path={link.path} />
      ))}
    </nav>
  );
};
export default FloatingNav;
