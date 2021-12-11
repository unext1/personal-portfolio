import React, { FC, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "lib/framer-settings";
import Footer from "./footer";

export const Layout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen bg-brand-dark-900 border-t-2 border-brand-dark-700">
      <div className="mr-0 md:mr-[90px]">
        <Navbar />
      </div>
      <motion.main
        exit="out"
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        className="mx-auto container px-6 md:px-8 "
      >
        {children}
      </motion.main>
    </div>
  );
};
