import { motion } from "framer-motion";

const About = () => {
  const supportLinks = [
    {
      name: "Frontend developer",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    },
    {
      name: "Full stack developer",
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
    <div className="relative py-10">
      <div className="relative z-10 grid w-full lg:grid-cols-4 gap-x-16">
        <div className="w-full col-span-3 lg:sticky lg:top-20 lg:col-span-1 experience-height">
          <div className="flex lg:block ">
            <h1 className="my-auto mr-5 text-6xl text-white md:text-8xl">4+</h1>
            <div className="mt-0 text-neutral-400 md:mt-5">
              <span className="block mb-1 text-lg font-semibold lg:text-xl ">
                Years
              </span>
              <span className="block mb-1 text-lg font-semibold lg:text-xl ">
                Experience
              </span>
              <span className="block mb-1 text-lg font-semibold lg:text-xl ">
                Programming
              </span>
            </div>
          </div>
          <div>
            <div className=" text-white text-2xl font-semibold mt-6 mb-2">
              Tech Stack
            </div>
            <div className="flex flex-wrap text-sm text-neutral-400">
              <span>
                React, HTML, CSS, Javascript, Typescript, TailwindCSS, NextJS,
                RemixJS, NodeJS, Docker Hasura, Firebase, GraphQL, MongoDB,
                Figma
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-3 mx-auto mt-5 lg:mt-0">
          <div>
            <div className="flex ">
              <h1 className="my-auto text-2xl font-bold text-white uppercase md:text-5xl">
                This is what i do
              </h1>
              <img
                alt="happy emoji"
                src="../happy.webp"
                className="h-16 ml-4 transform md:h-20 rotate-12"
              />
            </div>
          </div>

          <div className="container relative w-full pt-8 pb-10 mx-auto space-y-20">
            <motion.div
              className="relative cursor-pointer group "
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <a
                href="https://www.homebyaurelija.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative w-full p-6 transition shadow-md lg:p-10 lg:py-14 group-hover:shadow-2xl bg-brand-dark-800 rounded-2xl">
                  <div className="absolute right-0 px-10">
                    <p className="text-xs font-semibold tracking-wider text-right uppercase lg:text-base text-neutral-500">
                      Portfolio
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold tracking-wide text-white uppercase md:text-4xl lg:mt-5 lg:text-5xl">
                      HomeByAurelija
                    </h1>
                  </div>
                  <div className="p-0 pt-20 md:p-5 md:pt-24 lg:pt-36 xl:p-10 xl:pt-36 2xl:p-30">
                    <motion.img
                      src="/project5.jpg"
                      alt="Project5"
                      className="object-cover object-center w-full h-full transition duration-300 transform rounded-2xl group-hover:shadow-2xl "
                    />
                  </div>
                </div>
              </a>
            </motion.div>
            <motion.div
              className="relative cursor-pointer group "
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <a
                href="https://www.menulioritmu.lt/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative w-full p-6 transition shadow-md lg:p-10 lg:py-14 group-hover:shadow-2xl bg-brand-dark-800 rounded-2xl">
                  <div className="absolute right-0 px-10">
                    <p className="text-xs font-semibold tracking-wider text-right uppercase lg:text-base text-neutral-500">
                      Astrology Website
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold tracking-wide text-white uppercase md:text-4xl lg:mt-5 lg:text-5xl">
                      Mėnulio Ritmu
                    </h1>
                  </div>
                  <div className="p-0 pt-20 md:p-5 md:pt-24 lg:pt-36 xl:p-10 xl:pt-36 2xl:p-30">
                    <motion.img
                      src="/project4.png"
                      alt="Project4"
                      className="object-cover object-center w-full h-full transition duration-300 transform rounded-2xl group-hover:shadow-2xl "
                    />
                  </div>
                </div>
              </a>
            </motion.div>
            <motion.div
              className="relative cursor-pointer group "
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <a href="https://riiski.com" target="_blank" rel="noreferrer">
                {/* <div className="absolute inset-0 transition duration-200 opacity-75 bg-gradient-to-r from-red-500 to-red-500 rounded-xl blur group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div> */}
                <div className="relative w-full p-6 transition shadow-md lg:p-10 lg:py-14 group-hover:shadow-2xl bg-brand-dark-800 rounded-2xl">
                  <div className="absolute right-0 px-10">
                    <p className="text-xs font-semibold tracking-wider text-right uppercase lg:text-base text-neutral-500">
                      Web Affilate
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold tracking-wide text-white uppercase md:text-4xl lg:mt-5 lg:text-5xl">
                      Riiski
                    </h1>
                  </div>
                  <div className="p-0 pt-20 md:p-5 md:pt-24 lg:pt-36 xl:p-10 xl:pt-36 2xl:p-30">
                    <motion.img
                      src="/project1.jpg"
                      alt="Project1"
                      className="object-cover object-center w-full h-full transition duration-300 transform rounded-2xl group-hover:shadow-2xl "
                    />
                  </div>
                </div>
              </a>
            </motion.div>
            {/* <motion.div
              className="relative cursor-pointer group "
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <a
                href="https://shapez.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative w-full p-6 transition shadow-md lg:p-10 lg:py-14 group-hover:shadow-2xl bg-brand-dark-800 rounded-2xl">
                  <div className="absolute right-0 px-10">
                    <p className="text-xs font-semibold tracking-wider text-right uppercase lg:text-base text-neutral-500">
                      Web Affilate
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold tracking-wide text-white uppercase md:text-4xl lg:mt-5 lg:text-5xl">
                      Shapez
                    </h1>
                  </div>
                  <div className="relative p-0 pt-20 md:p-5 md:pt-24 lg:pt-36 xl:p-10 xl:pt-36 2xl:p-30">
                    <motion.img
                      src="/project2.jpg"
                      alt="Detail of zipper pull with tan leather and silver rivet."
                      className="w-full h-full transition duration-300 transform rounded-2xl"
                    />
                  </div>
                </div>
              </a>
            </motion.div> */}
            <motion.div
              className="relative cursor-pointer group "
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <a
                href="https://www.tenetestate.lt/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative w-full p-6 transition shadow-md lg:p-10 lg:py-14 group-hover:shadow-2xl bg-brand-dark-800 rounded-2xl">
                  <div className="absolute right-0 px-10">
                    <p className="text-xs font-semibold tracking-wider text-right uppercase lg:text-base text-neutral-500">
                      Real Estate Projects
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold tracking-wide text-white uppercase md:text-4xl lg:mt-5 lg:text-5xl">
                      Tenetestate
                    </h1>
                  </div>
                  <div className="p-0 pt-20 md:p-5 md:pt-24 lg:pt-36 xl:p-10 xl:pt-36 2xl:p-30">
                    <motion.img
                      src="/project3.png"
                      alt="Project3"
                      className="object-cover object-center w-full h-full transition duration-300 transform rounded-2xl group-hover:shadow-2xl "
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
