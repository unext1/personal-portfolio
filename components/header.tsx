import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative pb-40 py-28 lg:pt-40">
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
            <p className="flex mb-1 text-white">
              Hi there
              <img src="../wave.png" className="flex h-5 px-2 my-auto" />,
              I&apos;m
            </p>
            <h1
              className="-ml-1 text-5xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-500 lg:text-6xl xl:text-7xl"
              style={{ lineHeight: 1.1 }}
            >
              Laurynas
              <span className="block">Web Developer.</span>
            </h1>
            <p
              className="mt-5 text-sm text-white lg:text-lg"
              style={{ lineHeight: 1.3 }}
            >
              I&apos;m a Front-End Developer in Sweden. I have serious passion
              for UI effects, animations and creating intuitive, dynamic user
              experiences.
            </p>
            <div className="flex mt-10">
              <motion.div whileTap={{ scale: 0.9 }} className="relative group ">
                <div className="absolute transition duration-200 opacity-75 -inset-0 bg-gradient-to-r from-blue-700 to-red-500 rounded-xl blur group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
                <Link href="/contact">
                  <a className="relative flex items-center px-12 py-4 leading-none divide-x divide-gray-500 bg-brand-dark-900 rounded-xl">
                    <span className="flex items-center py-1 space-x-5">
                      {/* <motion.img
                        src="../peace.png"
                        className="h-6 text-white"
                      /> */}
                      <span className="text-gray-100">Get in touch</span>
                    </span>
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="hidden w-full col-span-2 my-auto py-36 lg:block bg-brand-dark-800 rounded-2xl ">
          <motion.img
            whileHover={{ rotate: 10, scale: 0.9 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 120, delay: 0.1 },
            }}
            src="../icon1.png"
            alt=""
            className="w-56 p-5 mx-auto invert"
          />

          <motion.img
            src="../peace.png"
            className="absolute items-center h-36 w-36 xl:h-44 xl:w-44 top-16 xl:top-10 -rotate-12 opacity-20"
          />
          <motion.img
            src="../happy.png"
            className="absolute right-0 xl:h-44 xl:w-44 h-36 w-36 top-32 xl:top-20 rotate-12 opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
