"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaBars, FaX } from "react-icons/fa6";

const linksLeft = [
  { href: "#students", linkName: "Students" },
  { href: "#case-inquiries", linkName: "Case Inquiries" },
];
const linksRight = [
  { href: "#about", linkName: "About" },
  { href: "#contact", linkName: "Contact" },
  { href: "#projects", linkName: "Projects" },
  { href: "#about-me", linkName: "About Me" },
];

const Navbar = () => {
  // const [activeLink, setActiveLink] = useState("");
  const [navbarExpanded, setNavbarExpanded] = useState(true);

  return (
    <nav className="p-10 sticky top-0 bg-background flex flex-col md:flex-row align-end md:justify-between z-50">
      <button
        className="py-10 self-end md:hidden"
        onClick={() => setNavbarExpanded(!navbarExpanded)}
      >
        {navbarExpanded ? <FaX /> : <FaBars />}
      </button>

      <ul
        className={`list-none md:flex gap-3 md:gap-10 flex-col md:flex-row mb-7 md:mb-0 ${
          navbarExpanded ? "flex" : "hidden"
        }`}
      >
        {linksLeft.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            linkName={link.linkName}
            setNavbarExpanded={setNavbarExpanded}
          />
        ))}
      </ul>
      <ul
        className={`list-none md:flex gap-3 md:gap-10 flex-col md:flex-row mb-7 md:mb-0 ${
          navbarExpanded ? "flex" : "hidden"
        }`}
      >
        {linksRight.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            linkName={link.linkName}
            setNavbarExpanded={setNavbarExpanded}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
