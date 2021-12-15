import React, { FC, useEffect, useRef, useContext } from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "lib/framer-settings";

export const Layout = ({ children }) => {
  return (
    <div className="relative flex w-full bg-brand-dark-900 selection:bg-red-500 selection:text-white">
      <div className="mr-0 md:mr-[90px]">
        <Navbar />
      </div>
      <motion.main
        exit="out"
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        className="container px-6 mx-auto md:px-8 "
      >
        {children}
      </motion.main>
    </div>
  );
};
