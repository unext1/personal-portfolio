import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative py-36 lg:py-40">
      <div className="mx-auto lg:grid lg:grid-cols-5 ">
        <div className="col-span-3 my-auto ">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 120 },
            }}
            className="lg:pr-52"
          >
            <p className="flex text-sm text-white">
              Hi there
              <img
                src="../wave.webp"
                className="flex h-5 px-2 my-auto"
                alt="wave emoji"
              />
              , I&apos;m
            </p>
            <motion.h1
              className="-ml-1 text-6xl font-semibold tracking-wider text-transparent uppercase bg-clip-text bg-gradient-to-r from-red-500 to-blue-700 xl:text-7xl 2xl:text-8xl"
              style={{ lineHeight: 1.1 }}
            >
              Laurynas
            </motion.h1>
            <p
              className="mt-5 text-sm font-semibold tracking-wide text-white lg:text-base"
              style={{ lineHeight: 1.3 }}
            >
              A Full-Stack Developer placed in Sweden. I have passion for
              everything i do, starting from web start to finish.
            </p>
            <div className="flex mt-10">
              <motion.div whileTap={{ scale: 0.9 }} className="relative group ">
                <div className="absolute transition duration-200 opacity-75 -inset-0 bg-gradient-to-r from-red-500 to-blue-700 rounded-xl blur group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
                <Link href="/contact">
                  <a className="relative flex items-center px-7 py-2.5 leading-none divide-x divide-gray-500 md:py-4 md:px-10 bg-brand-dark-900 rounded-xl">
                    <span className="flex items-center py-1 space-x-5">
                      <motion.img
                        alt="peace emoji"
                        src="../peace.webp"
                        className="h-6 text-white"
                      />
                      <span className="text-gray-100">Get in touch</span>
                    </span>
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="items-center justify-center hidden w-full col-span-2 py-10 my-auto lg:flex bg-brand-dark-800 rounded-2xl">
          <motion.img
            whileHover={{ rotate: 10, scale: 0.9 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              y: { type: "spring", stiffness: 120, delay: 0.1 },
            }}
            src="../peace.webp"
            alt="peace emoji"
            className="w-2/3 p-5 mx-auto"
          />
          <motion.img
            alt="peace emoji"
            src="../peace.webp"
            className="absolute items-center opacity-25 h-36 w-36 xl:h-44 xl:w-44 top-16 xl:top-12 md:right-64 xl:right-96 -rotate-12"
          />
          <motion.img
            alt="happy emoji"
            src="../happy.webp"
            className="absolute right-0 opacity-25 xl:h-44 xl:w-44 h-36 w-36 top-32 xl:top-20 rotate-12"
          />
        </div>
        {/* <div className="hidden w-full col-span-2 my-auto py-36 lg:block bg-brand-dark-800 rounded-2xl">
          <motion.img
            whileHover={{ rotate: 10, scale: 0.9 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 120, delay: 0.1 },
            }}
            src="../icon1.webp"
            alt=""
            className="w-56 p-5 mx-auto invert"
          />

          <motion.img
            src="../peace.webp"
            className="absolute items-center opacity-25 h-36 w-36 xl:h-44 xl:w-44 top-16 xl:top-12 -rotate-12"
          />
          <motion.img
            src="../happy.webp"
            className="absolute right-0 opacity-25 xl:h-44 xl:w-44 h-36 w-36 top-32 xl:top-20 rotate-12"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
