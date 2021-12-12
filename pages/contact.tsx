import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex items-center h-screen ">
      <div className="container w-full mx-auto ">
        <div className="relative flex items-center justify-center w-full h-full text-center">
          <div className="z-10 w-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-purple text-8xl">
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
              className=""
            >
              your dreams?
            </motion.h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              className="relative mt-10 text-lg tracking-widest text-white underline uppercase cursor-pointer underline-offset-8 "
            >
              Contact now
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
