import React from "react";
import NavLink from "./NavLink";

const links = [
  { href: "/", linkName: "Home" },
  { href: "/students", linkName: "Students" },
  { href: "/case-inquiries", linkName: "Case Inquiries" },
  { href: "/about", linkName: "About" },
  { href: "/contact", linkName: "Contact" },
  { href: "/projects", linkName: "Projects" },
];

const Navbar = () => {
  return (
    <nav className="p-10">
      <ul className="list-none flex gap-4">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} linkName={link.linkName} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
