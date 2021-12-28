import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.8,
      },
      exit: {
        opacity: 0,
        y: -200,
        transition: {
          ease: "easeInOut",
        },
      },
    },
  };

  const name = ["L", "a", "u", "r", "y", "n", "a", "s"];

  return (
    // <div
    //   className={
    //     " h-screen w-screen z-50 absolute top-0 inset-0 bg-brand-dark-900 "
    //   }
    // >
    //   <div className="flex items-center justify-center w-full h-full mx-auto my-auto">
    //     <motion.div
    //       initial={{ rotate: 0, scale: 0, opacity: 0 }}
    //       animate={{
    //         rotate: 360,
    //         scale: 1.1,
    //         opacity: 1,
    //       }}
    //       exit={{ rotate: 0, scale: 0, opacity: 0 }}
    //       transition={{ duration: 1 }}
    //       className="h-20 mb-3"
    //     >
    //       <img
    //         src="/icon1.png"
    //         className="h-16 text-white"
    //         style={{ filter: "invert(100%) " }}
    //       />
    //     </motion.div>
    //   </div>
    // </div>
    <div
      className={
        " h-screen w-screen z-50 absolute top-0 inset-0 bg-brand-dark-900 flex items-center justify-center mx-auto"
      }
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="-ml-1 text-5xl font-semibold tracking-wider text-transparent uppercase md:flex bg-clip-text bg-gradient-to-r from-red-500 to-blue-700 lg:text-6xl xl:text-9xl">
          {name.map((i) => (
            <motion.span variants={item} key={i}>
              {i}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
