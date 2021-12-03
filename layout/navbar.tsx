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

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  return (
    <div className="h-screen flex overflow-hidden ">
      <div className="hidden md:flex w-">
        <div className="px-5 flex-1 flex flex-col min-h-0 border-r border-brand-blue-800 bg-brand-blue-900">
          <div className="flex-1 flex flex-col pt-6 overflow-y-auto">
            <div className="h-10 mx-auto mb-3">
              <svg
                viewBox="0 0 57 52"
                overflow="visible"
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                fill="#fff"
              >
                <path
                  d="M14.18 36.04s7.13-7.78 13.87-.13a11.62 11.62 0 012.37-2.08 8.08 8.08 0 0012.86 4.13c2.2 2.88 6.5 7.55 8.69 3.32 3.128-6.064-2.729-6.328-3.244-6.34h-.036c5.03-5.67 12.89 6.78 1.79 14-10.51 6.8-21.21-3.69-22.39-4.91-1.18 1.22-11.88 11.71-22.38 4.91-11.14-7.22-3.26-19.67 1.74-14 0 0-6.55 0-3.27 6.34 3 5.83 10-5.24 10-5.24zM35.84 0a10.45 10.45 0 0110.48 10.45v7.49a10.5 10.5 0 01-.32 2.59h2a4 4 0 014 3.97v.17a4 4 0 01-4 4h-2.27a8.08 8.08 0 00-15 0H7.7a4 4 0 01-4-4v-.14a4 4 0 014-4h2a10.5 10.5 0 01-.32-2.59v-7.49A10.45 10.45 0 0119.84 0z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <nav className="mt-5 flex-1 space-y-2.5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-brand-blue-800 text-white"
                      : "text-brand-gray-800 hover:bg-brand-blue-800 hover:text-white",
                    "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-brand-gray-800 group-hover:text-white",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex  p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Tom Cook
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
