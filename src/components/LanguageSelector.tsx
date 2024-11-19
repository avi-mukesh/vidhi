"use client";

import Link from "next/link";
import React from "react";

const LanguageSelector = () => {
  return (
    <div className="absolute left-[10%] bottom-4 flex gap-4 text-lg justify-start">
      <Link href="#main">Continue...</Link>
      {/* <button>English</button>
      <button>Tamil</button>
      <button>Hindi</button> */}
    </div>
  );
};

export default LanguageSelector;
