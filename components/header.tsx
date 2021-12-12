import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-24 lg:pt-24 lg:pb-48">
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
            <h1 className="text-6xl font-bold tracking-wider text-white uppercase">
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
                <div className="absolute transition duration-200 opacity-75 -inset-0 bg-gradient-to-r from-brand-green to-brand-purple rounded-xl blur group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
                <Link href="/contact">
                  <a className="relative flex items-center px-10 py-4 leading-none divide-x divide-gray-600 bg-brand-dark-900 rounded-xl">
                    <span className="flex items-center space-x-5">
                      <motion.img
                        src="../peace.png"
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
        <div className="hidden w-full my-auto lg:block ">
          <motion.img
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
