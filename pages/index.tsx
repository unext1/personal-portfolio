import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
  MailIcon,
} from "@heroicons/react/outline";

export default function Index() {
  const supportLinks = [
    {
      name: "FrontEnd",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    },
    {
      name: "Javascript",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    },
    {
      name: "Creative Coding",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    },
  ];
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden px-6 sm:px-8 ">
        <div className="py-24 lg:pb-52 lg:pt-20 lg:max-w-screen-2xl ">
          <div className="mx-auto lg:grid lg:grid-cols-2">
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
                    <button className="relative px-10 py-4 bg-brand-dark-900 rounded-xl leading-none flex items-center divide-x divide-gray-600">
                      <span className="flex items-center space-x-5">
                        <motion.img
                          src="/image(2).png"
                          className="text-white h-6"
                        />
                        <span className="text-gray-100">Get in touch</span>
                      </span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="w-full my-auto hidden lg:block ">
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
      </div>
      <div className="px-6 sm:px-8 lg:max-w-screen-2xl mt-20">
        <div className="grid w-full lg:grid-cols-4 gap-x-16">
          <div className=" lg:sticky lg:top-20 w-full col-span-3 lg:col-span-1 experience-height ">
            <div className="flex md:block ">
              <h1 className="text-white text-8xl mr-5">4+</h1>
              <div className="text-brand-gray-lighter mt-0 md:mt-5">
                <span className="block mb-1 font-semibold text-xl ">Years</span>
                <span className="block mb-1 font-semibold text-xl ">
                  Experience
                </span>
                <span className="block mb-1 font-semibold text-xl ">
                  Programming
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full h-full col-span-3 ">
            <div>
              <div className="flex ">
                <h1 className="text-3xl md:text-5xl tracking-wider font-bold text-white my-auto">
                  This is what i do
                </h1>
                <img
                  src="/image(1).png"
                  className="h-20 ml-3 rotate-12 transform"
                />
              </div>
              <div className="mt-10 pb-12 sm:pb-16">
                <section className="">
                  <h2 className="sr-only" id="contact-heading">
                    Contact us
                  </h2>
                  <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                      <div
                        key={link.name}
                        className="flex flex-col bg-brand-dark-800 rounded-xl shadow-xl"
                      >
                        <div className="flex-1 relative py-10 px-6  md:px-8">
                          <h3 className="text-xl font-medium text-white">
                            {link.name}
                          </h3>
                          <p className="mt-4 text-base text-brand-gray-lighter">
                            {link.description}
                          </p>
                        </div>
                        <div className="p-6 bg-brand-purple rounded-bl-xl rounded-br-xl md:px-8">
                          <a
                            href={link.href}
                            className="text-base font-medium text-white hover:text-gray-50"
                          >
                            Contact us<span aria-hidden="true"> &rarr;</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            <div className="mt-20 ">
              <div className="flex  group lg:grid lg:grid-cols-5 bg-brand-dark-800 rounded-xl mb-20 shadow-xl relative w-full  cursor-pointer">
                <div className=" col-span-1 md:col-span-2 my-auto px-10  ">
                  <div className="w-28 absolute mx-auto -top-3 left-0 right-0 bg-brand-green rounded-xl">
                    <h1 className="text-white uppercase text-center">
                      Affiliate
                    </h1>
                  </div>
                  <h1 className="text-xl md:text-4xl mb-2 text-white tec font-semibold">
                    Riiski
                  </h1>
                  <p className="text-sm md:text-lg uppercase text-brand-gray-lighter tracking-wider">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
                <div className="flex-auto w-5/6 md:w-full md:col-span-3 my-auto items-center flex align-middle justify-items-center  ">
                  <div className=" h-full bg-black rounded-r-xl ">
                    <img
                      src="/project1.png"
                      alt="Detail of zipper pull with tan leather and silver rivet."
                      className="object-center object-cover w-full h-full opacity-75 py-10 group-hover:scale-95 transition duration-150"
                    />
                  </div>
                </div>
              </div>

              <div className="flex group lg:grid lg:grid-cols-5 bg-brand-dark-800 rounded-xl mb-20 shadow-xl relative w-full cursor-pointer">
                <div className="flex-auto  w-5/6 md:w-full md:col-span-3 my-auto items-center flex align-middle justify-items-center ">
                  <div className="h-full bg-black rounded-l-xl ">
                    <img
                      src="/project2.png"
                      alt="Detail of zipper pull with tan leather and silver rivet."
                      className="object-center object-cover w-full h-full opacity-75 py-10 group-hover:scale-95 transition duration-150"
                    />
                  </div>
                </div>
                <div className="col-span-1  md:col-span-2 my-auto px-10 w-full text-right">
                  <div className="w-28 absolute mx-auto -top-3 left-0 right-0 bg-brand-green rounded-xl">
                    <h1 className="text-white uppercase text-center">
                      Affiliate
                    </h1>
                  </div>
                  <h1 className="text-xl md:text-4xl mb-2 text-white font-semibold">
                    Shapez
                  </h1>
                  <p className="text-sm md:text-lg uppercase text-brand-gray-lighter tracking-wider">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
