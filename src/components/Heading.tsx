"use client";

import React from "react";
import { motion } from "framer-motion";

const headingVariants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};
const subHeadingVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delay: 1.6,
      duration: 1.5,
    },
  },
};

const Heading = () => {
  return (
    <motion.header
      className="text-center h-[50vh] md:h-[100vh] grid place-content-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.h1
        className="uppercase text-5xl md:text-8xl mb-3"
        variants={headingVariants}
      >
        Vidhi Saharaa
      </motion.h1>
      <motion.p className="md:text-lg" variants={subHeadingVariants}>
        Guiding Legal Light Nurturing Justice Everywhere
      </motion.p>
    </motion.header>
  );
};

export default Heading;
