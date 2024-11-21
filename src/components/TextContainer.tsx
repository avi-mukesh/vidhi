import React from "react";

type PropsType = {
  children: React.ReactNode;
};

const TextContainer = ({ children }: PropsType) => {
  return (
    <div className="flex flex-col justify-center gap-10 md:text-lg">
      {children}
    </div>
  );
};

export default TextContainer;
