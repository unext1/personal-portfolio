import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Team", href: "/team", icon: UsersIcon },
    { name: "Projects", href: "#", icon: FolderIcon },
    { name: "Calendar", href: "#", icon: CalendarIcon },
    { name: "Documents", href: "#", icon: InboxIcon },
    { name: "Reports", href: "#", icon: ChartBarIcon },
  ];

  const router = useRouter();

  return (
    <div className="relative z-10 ">
      <div className="hidden md:flex fixed h-full">
        <div className="px-5 flex-1 flex flex-col border-r-2 border-brand-dark-700 bg-brand-dark-900 ">
          <div className="flex-1 flex flex-col pt-6 overflow-y-auto">
            <div className="mx-auto mb-3">
              <Link href="/">
                <a>
                  <motion.img
                    whileTap={{ scale: 1.1, rotate: 0 }}
                    whileHover={{ rotate: 10, scale: 0.9 }}
                    src="/icon1.png"
                    className="text-white h-12 w-12"
                    style={{ filter: "invert(100%) " }}
                  />
                </a>
              </Link>
            </div>
            <nav className="mt-5 flex-1 space-y-2.5 ">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="group flex">
                    <div className="sidebar-tooltip group-hover:scale-100 my-auto mt-1.5 z-50 ">
                      {item.name}
                    </div>
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      className={classNames(
                        router.asPath == item.href
                          ? "bg-brand-purple text-white "
                          : "text-brand-gray-darker hover:bg-brand-purple hover:text-white ",
                        "group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl "
                      )}
                    >
                      <item.icon
                        className={classNames(
                          router.asPath == item.href
                            ? "text-white"
                            : "text-brand-gray-darker group-hover:text-white",
                          "flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    </motion.div>
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="flex items-center justify-center w-full fixed md:hidden bottom-5 p-5 ">
        <div className="w-full max-w-md mx-auto ">
          <div className="bg-brand-dark-600 bg-opacity-90 shadow-2xl rounded-full ">
            <div className="flex py-2">
              <div className="flex justify-around w-full my-auto px-5">
                <div className="group">
                  <a
                    href="#"
                    className="flex items-end justify-center text-center w-full text-brand-gray-darker group-hover:text-brand-purple"
                  >
                    <i className="fa fa-cog text-2xl block"></i>
                  </a>
                </div>
                <div className="group">
                  <a
                    href="#"
                    className="flex items-end justify-center text-center w-full text-brand-gray-darker group-hover:text-brand-purple"
                  >
                    <i className="fa fa-compass text-2xl block"></i>
                  </a>
                </div>
              </div>
              <div className="flex-1 group w-full h-full my-auto mx-auto flex justify-center cursor-pointer outline-none">
                <Link href="/">
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                    className="h-12 w-12 bg-brand-green rounded-full text-center my-auto"
                  >
                    <i className="fa fa-home text-2xl text-white my-auto mt-2"></i>
                  </motion.a>
                </Link>
              </div>
              <div className="flex justify-around w-full my-auto  px-5">
                <div className="group">
                  <a
                    href="#"
                    className="flex items-end justify-center text-center w-full text-brand-gray-darker group-hover:text-brand-purple"
                  >
                    <i className="fa fa-search  text-2xl block"></i>
                  </a>
                </div>
                <div className="group">
                  <a
                    href="#"
                    className="flex items-end justify-center text-center w-full text-brand-gray-darker group-hover:text-brand-purple"
                  >
                    <i className="fa fa-user text-2xl block"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="hidden md:flex w-80">
<div className="px-5 flex-1 flex flex-col min-h-0 border-r-2 border-brand-dark-700 bg-brand-dark-900 ">
  <div className="flex-1 flex flex-col pt-6 overflow-y-auto">
    <motion.div whileTap={{ scale: 1.2 }} className="mx-auto mb-3">
      <Link href="/">
        <a>
          <img
            src="/icon1.png"
            className="text-white h-16"
            style={{ filter: "invert(100%) " }}
          />
        </a>
      </Link>
    </motion.div>
    <nav className="mt-5 flex-1 space-y-2.5">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={classNames(
              router.asPath == item.href
                ? "bg-brand-purple text-white "
                : "text-brand-gray-darker hover:bg-brand-purple hover:text-white ",
              "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md "
            )}
          >
            <item.icon
              className={classNames(
                router.asPath == item.href
                  ? "text-white"
                  : "text-brand-gray-darker group-hover:text-white",
                "mr-3 flex-shrink-0 h-6 w-6"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  </div>
  <div className="flex-shrink-0 flex p-4"></div>
</div>
</div> */
}
