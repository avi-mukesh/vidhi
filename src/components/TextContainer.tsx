import React from "react";

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const TextContainer = ({ children, className }: PropsType) => {
  return (
    <div
      className={`flex flex-col justify-center gap-10 md:text-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default TextContainer;
