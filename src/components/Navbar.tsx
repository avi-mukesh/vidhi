"use client";

import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import NavbarSection from "./NavbarSection";

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
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="px-10 pb-0 md:pt-5 sticky top-0 bg-background flex flex-col md:flex-row align-end md:justify-between z-50">
      <button
        className="pt-6 pb-3 self-end md:hidden"
        onClick={() => setNavbarExpanded(!navbarExpanded)}
      >
        {navbarExpanded ? <FaX /> : <FaBars />}
      </button>

      <NavbarSection
        links={linksLeft}
        navbarExpanded={navbarExpanded}
        activeLink={activeLink}
        setNavbarExpanded={setNavbarExpanded}
        setActiveLink={setActiveLink}
      />
      <NavbarSection
        links={linksRight}
        navbarExpanded={navbarExpanded}
        activeLink={activeLink}
        setNavbarExpanded={setNavbarExpanded}
        setActiveLink={setActiveLink}
      />
    </nav>
  );
};

export default Navbar;
