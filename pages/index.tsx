import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-hidden">
      <div className="relative py-20 lg:pb-52 lg:pt-20 px-5 md:px-10">
        <div className="mx-auto lg:grid lg:grid-cols-2">
          <div className="my-auto">
            <motion.div
              initial={{ x: -1000, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 50 },
              }}
              className="lg:pr-16"
            >
              <h1 className="text-6xl uppercase b tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green  to-brand-purple ">
                Focus on what matters
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                All the charts, datepickers, and notifications in the world
                cant&apos;t beat checking off some items on a paper card.
              </p>
              <div className="flex mt-10">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="relative group px-0.5"
                >
                  <div className="absolute -inset-0 bg-gradient-to-r from-brand-green to-brand-purple rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-10 py-4 bg-brand-dark-900 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    <span className="flex items-center space-x-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-brand-green -rotate-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                      <span className="text-gray-100">Get in touch</span>
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="w-full my-auto hidden lg:block">
            <motion.img
              initial={{ x: 1000, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 50 },
              }}
              src="/il2.png"
              alt=""
              className="w-full "
            />
          </div>
        </div>
      </div>
      <div className="grid-cols-1 xl:grid-cols-6 grid gap-10 py-20 px-5 md:px-10 ">
        <motion.div
          initial={{ y: 1000, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { type: "spring", stiffness: 50 },
          }}
          className="bg-brand-purple col-span-1 xl:col-span-2 rounded-2xl shadow relative p-10"
        >
          <div>
            <img src="/il1.png" className="h-72 w-full object-cover"></img>
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-md uppercase">
              Crypto
              <span className="block mt-1 text-2xl tracking-wider">
                Portfolio
              </span>
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 1000, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { type: "spring", stiffness: 50 },
          }}
          className="bg-brand-purple col-span-1 xl:col-span-4 rounded-2xl shadow-2xl p-10 relative"
        >
          <div className="mb-10">
            <h1 className="text-white uppercase font-semibold text-lg tracking-wider">
              Rates
            </h1>
          </div>

          <div className="">
            {/* {crypto.data.map((i) => (
              <div className="flex w-full my-5" key={i.id}>
                <i className="fa fa-facebook text-2xl rounded-full text-white" />
                <div className="text-white my-auto px-5 flex justify-between w-full ">
                  <div>
                    <span className="uppercase font-semibold tracking-wider text-brand-gray-lighter">
                      {i.name}
                    </span>
                    <span className="pl-5 ">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(i.quote.USD.price)}
                    </span>
                  </div>
                  <span
                    className={`${
                      i.quote.USD.percent_change_1h < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(i.quote.USD.percent_change_1h)}{" "}
                    %
                  </span>
                  <i className="fa fa-arrow-down text-sm my-auto rounded-full text-white" />
                </div>
              </div>
            ))} */}
          </div>
        </motion.div>
      </div>
    </div>
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
