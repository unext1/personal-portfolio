import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <div
      className={
        " h-screen w-screen z-50 absolute top-0 inset-0 bg-brand-dark-900 "
      }
    >
      <div className="flex items-center justify-center w-full h-full mx-auto my-auto">
        <motion.div
          initial={{ rotate: 0, scale: 0, opacity: 0 }}
          animate={{
            rotate: 360,
            scale: 1.1,
            opacity: 1,
          }}
          exit={{ rotate: 0, scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          className="h-20 mb-3"
        >
          <img
            src="/icon1.png"
            className="h-16 text-white"
            style={{ filter: "invert(100%) " }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
