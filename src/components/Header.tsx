import React from "react";

type PropsType = {
  children: React.ReactNode;
};

const Header = ({ children }: PropsType) => {
  return (
    <header>
      <h2 className="text-4xl md:text-6xl text-center relative mb-8 max-w-fit mx-auto">
        {children}
      </h2>
    </header>
  );
};

export default Header;
