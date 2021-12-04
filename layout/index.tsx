import React, { FC, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";

export const Layout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen bg-brand-blue-900">
      <Navbar />
      <main className=" w-full h-full overflow-y-auto focus:outline-none">
        {children}
      </main>
    </div>
  );
};
