import { useState } from "react";
import Link from "next/link";

import Header from "../components/header";
import About from "components/about";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <>
      <Header />
      <About />
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

/* <motion.div
initial={{ opacity: 0, backgroundColor: "white" }}
whileInView={{ opacity: 1 }}
transition={{
  duration: 2,
}}
className="bg-white w-52 h-52"
></motion.div> */

/* <div className="relative grid w-full lg:grid lg:grid-cols-5 gap-y-10">
<div className="z-10 col-span-1 my-auto md:col-span-2">
  <span className="text-xl text-brand-gray-lighter ">
    Affiliate marketing, Ux, Ui, Front-end
  </span>
  <h1
    className="my-3 text-4xl font-bold text-white md:text-6xl"
    style={{ lineHeight: 1.2 }}
  >
    Riiski
  </h1>
  <button className="mt-3 text-sm text-white uppercase border-b md:text-md">
    MORE INFO
  </button>
</div>
<div className="relative z-0 flex items-center my-auto align-middle cursor-pointer md:w-full md:col-span-3 justify-items-center group">
  <div className="absolute w-full h-full opacity-50 bg-gradient-to-l from-blue-700 via-brand-dark-900 rounded-xl "></div>

  <div className="relative w-full h-full p-5 md:p-10 ">
    <motion.img
      whileHover={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      src="/project1.png"
      alt="Detail of zipper pull with tan leather and silver rivet."
      className="object-cover object-center w-full h-full transition duration-150 rounded-xl 5 roup-hover:scale-95"
    />
  </div>
</div>
</div> */
