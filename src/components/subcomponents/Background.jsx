"use client";

import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      initial={{ y: -100, rotate: -70, opacity: 0 }}
      animate={{ y: 0, rotate: -60, opacity: 0.6 }}
      transition={{ duration: 1.05, ease: "easeInOut", delay: 0.5 }}
      className="absolute z-50 left-10 top-[-200px] lg:text-[900px] lg:left-[560px] lg:top-[-650px] 
                 text-white text-[350px] font-bold blur-[30px] lg:blur-[50px] 
                 select-none pointer-events-none"
    >
      |
    </motion.div>
  );
};

export default Background;
