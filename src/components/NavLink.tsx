import Link from "next/link";
import React from "react";

type PropsType = {
  href: string;
  linkName: string;
};

const NavLink = ({ href, linkName }: PropsType) => {
  return (
    <li className="text-lg">
      <Link href={`${href}`}>{linkName}</Link>
    </li>
  );
};

export default NavLink;
