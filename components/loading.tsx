import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <div
      className={
        " h-screen w-screen z-50 absolute top-0 inset-0 bg-brand-dark-900"
      }
    >
      <div className="flex w-full h-full justify-center items-center mx-auto my-auto">
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
            className="text-white h-16"
            style={{ filter: "invert(100%) " }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
