import React from "react";
import NavLink from "./NavLink";

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
  return (
    <nav className="p-10 sticky top-0 bg-background flex justify-between z-50">
      <ul className="list-none flex gap-10">
        {linksLeft.map((link) => (
          <NavLink key={link.href} href={link.href} linkName={link.linkName} />
        ))}
      </ul>
      <ul className="list-none flex gap-10">
        {linksRight.map((link) => (
          <NavLink key={link.href} href={link.href} linkName={link.linkName} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
