import Link from "next/link";
import React from "react";
import clsx from "clsx";

type PropsType = {
  href: string;
  linkName: string;
  setNavbarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

const NavLink = ({
  href,
  linkName,
  setNavbarExpanded,
  active,
  setActiveLink,
}: PropsType) => {
  return (
    <li className={clsx(`md:text-lg`, { underline: active })}>
      <Link
        href={`${href}`}
        onClick={() => {
          setNavbarExpanded(false);
          setActiveLink(href);
        }}
      >
        {linkName}
      </Link>
    </li>
  );
};

export default NavLink;
