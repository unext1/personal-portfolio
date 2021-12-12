import { useState } from "react";
import Link from "next/link";

import Header from "../components/header";
import About from "components/about";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function Index() {
  return (
    <>
      <Header />
      <About />
      <motion.div className="container w-full py-20 mx-auto ">
        <div className="relative flex w-full lg:grid lg:grid-cols-7">
          <div className="right-0 z-10 col-span-1 my-auto md:col-span-3">
            <span className="text-xl text-brand-gray-lighter ">
              Affiliate marketing, Ux, Ui, Front-end
            </span>
            <h1
              className="my-3 font-bold text-white md:text-6xl"
              style={{ lineHeight: 1.2 }}
            >
              Game Analytics wins TechCrunch Disrupt and Rasie $2.6M
            </h1>
            <button className="mt-5 text-white uppercase border-b text-md">
              MORE INFO
            </button>
          </div>
          <div className="z-0 flex items-center my-auto align-middle cursor-pointer md:w-full md:col-span-4 justify-items-center group">
            <div className="h-full bg-black rounded-r-xl">
              <Link href="/1">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  src="/project1.png"
                  alt="Detail of zipper pull with tan leather and silver rivet."
                  className="object-cover object-center w-full h-full py-10 transition duration-150 opacity-75 group-hover:scale-95"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export async function getServerSideProps({ req, res }) {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  // const top10 = await fetch(
  //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10",
  //   {
  //     method: "GET",
  //     headers: {
  //       "X-CMC_PRO_API_KEY": "3e6350fe-ce25-4ba0-89fb-6857d171447a",
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((resJson) => {
  //     return resJson;
  //   });

  return {
    props: {}, // will be passed to the page component as props
  };
}

{
  /* <motion.div
initial={{ opacity: 0, backgroundColor: "white" }}
whileInView={{ opacity: 1 }}
transition={{
  duration: 2,
}}
className="bg-white w-52 h-52"
></motion.div> */
}
