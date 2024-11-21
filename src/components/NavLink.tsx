import Link from "next/link";
import React from "react";

type PropsType = {
  href: string;
  linkName: string;
  setNavbarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLink = ({ href, linkName, setNavbarExpanded }: PropsType) => {
  return (
    <li className="text-lg">
      <Link href={`${href}`} onClick={() => setNavbarExpanded(false)}>
        {linkName}
      </Link>
    </li>
  );
};

export default NavLink;
