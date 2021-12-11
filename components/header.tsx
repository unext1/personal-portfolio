import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-24 lg:pb-20 lg:pt-20 ">
      <div className="mx-auto lg:grid lg:grid-cols-2 ">
        <div className="my-auto ">
          <motion.div
            initial={{ x: -1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 50 },
            }}
            className="lg:pr-16"
          >
            <h1 className="text-6xl uppercase tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-purple">
              Focus on what matters
            </h1>
            <p className="mt-4 text-xl text-brand-gray-lighter">
              All the charts, datepickers, and notifications in the world
              cant&apos;t beat checking off some items on a paper card.
            </p>
            <div className="flex mt-10">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative group px-0.5"
              >
                <div className="absolute -inset-0 bg-gradient-to-r from-brand-green to-brand-purple rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt"></div>
                <Link href="/contact">
                  <a className="relative px-10 py-4 bg-brand-dark-900 rounded-xl leading-none flex items-center divide-x divide-gray-600">
                    <span className="flex items-center space-x-5">
                      <motion.img
                        src="../peace.png"
                        className="text-white h-6"
                      />
                      <span className="text-gray-100">Get in touch</span>
                    </span>
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="w-full my-auto hidden lg:block ">
          <motion.img
            whileHover={{ scale: 0.8, rotate: 10 }}
            initial={{ x: 1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { type: "spring", stiffness: 50, duration: 10 },
            }}
            src="../il2.png"
            alt=""
            className="w-5/6 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
