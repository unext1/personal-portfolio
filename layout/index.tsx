import React, { FC, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "lib/framer-settings";

export const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-full bg-brand-dark-900 min-h-screen ">
      <div className="mr-0 md:mr-[90px]">
        <Navbar />
      </div>
      <motion.main
        exit="out"
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full h-full"
      >
        {children}
      </motion.main>
    </div>
  );
};
