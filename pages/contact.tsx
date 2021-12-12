import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 0.15 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex items-center h-screen overflow-hidden"
    >
      <motion.img
        variants={item}
        src="../peace.png"
        className="absolute h-36 text-whitems-center w-36 md:h-44 md:w-44 top-10 -rotate-12"
      />
      <motion.img
        variants={item}
        src="../happy.png"
        className="absolute right-0 text-white md:h-44 md:w-44 h-36 w-36 top-36 md:top-20 rotate-12"
      />
      <motion.img
        variants={item}
        src="../image.png"
        className="absolute text-white -rotate-[30deg] left-10 md:h-44 md:w-44 h-36 w-36 bottom-32 md:bottom-52 md:left-56 "
      />
      <motion.img
        variants={item}
        src="../image.png"
        className="absolute left-0 right-0 hidden mx-auto text-white lg:block h-44 w-44 top-56"
      />
      <motion.img
        variants={item}
        src="../happy.png"
        className="absolute hidden text-white h-44 w-44 lg:block"
      />
      <motion.img
        variants={item}
        src="../peace.png"
        className="absolute hidden text-white h-44 w-44 right-20 lg:block"
      />
      <motion.img
        variants={item}
        src="../peace.png"
        className="absolute hidden text-white h-44 w-44 right-64 bottom-20 rotate-12 lg:block"
      />

      <div className="container w-full mx-auto ">
        <div className="relative flex items-center justify-center w-full h-full text-center">
          <div className="z-10 w-full text-4xl font-bold lg:text-7xl md:text-7xl xl:text-8xl">
            <motion.h1
              initial={{ x: -1000, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 50 },
              }}
              className="mb-5 text-white"
            >
              Ready to accomplish
            </motion.h1>
            <motion.h1
              initial={{ x: 1000, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 50 },
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-purple"
            >
              your dreams?
            </motion.h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              className="relative mt-10 text-sm tracking-widest text-white underline uppercase cursor-pointer md:text-lg underline-offset-8"
            >
              Contact now
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
