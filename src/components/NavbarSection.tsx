import React from "react";
import NavLink from "./NavLink";

type Link = {
  href: string;
  linkName: string;
};

type PropsType = {
  className?: string;
  navbarExpanded: boolean;
  links: Link[];
  activeLink: string;
  setNavbarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

const NavbarSection = ({
  className,
  navbarExpanded,
  links,
  activeLink,
  setNavbarExpanded,
  setActiveLink,
}: PropsType) => {
  return (
    <ul
      className={`list-none md:flex gap-3 md:gap-10 flex-col md:flex-row md:mb-0 ${
        navbarExpanded ? "flex" : "hidden"
      } ${className}`}
    >
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          linkName={link.linkName}
          setNavbarExpanded={setNavbarExpanded}
          active={activeLink === link.href}
          setActiveLink={setActiveLink}
        />
      ))}
    </ul>
  );
};

export default NavbarSection;
