import Link from "next/link";

const About = () => {
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
    <div className="relative mt-20">
      <div className="relative z-10 grid w-full lg:grid-cols-4 gap-x-16">
        <div className="w-full col-span-3 lg:sticky lg:top-20 lg:col-span-1 experience-height">
          <div className="flex md:block ">
            <h1 className="mr-5 text-white text-8xl">4+</h1>
            <div className="mt-0 text-brand-gray-lighter md:mt-5">
              <span className="block mb-1 text-xl font-semibold ">Years</span>
              <span className="block mb-1 text-xl font-semibold ">
                Experience
              </span>
              <span className="block mb-1 text-xl font-semibold ">
                Programming
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-3 mx-auto ">
          <div>
            <div className="flex ">
              <h1 className="my-auto text-3xl font-bold text-white md:text-5xl">
                This is what i do
              </h1>
              <img
                src="../happy.png"
                className="h-20 ml-3 transform rotate-12"
              />
            </div>
            <h1 className="my-auto text-lg text-brand-gray-lighter md:text-xl">
              UX Designer and Full Stack Developer, specialized in UI/UX, and
              digital designs from Sweden.
            </h1>
            <div className="pb-12 mt-10 sm:pb-16">
              <section className="">
                <h2 className="sr-only" id="contact-heading">
                  Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                  {supportLinks.map((link) => (
                    <div
                      key={link.name}
                      className="flex flex-col shadow-xl bg-brand-dark-800 rounded-xl"
                    >
                      <div className="relative flex-1 px-6 py-10 md:px-8">
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
                          className="text-base font-semibold text-white hover:text-gray-50"
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
          <div className="">
            <div className="flex ">
              <h1 className="my-auto text-3xl font-bold text-white md:text-5xl">
                My skills
              </h1>
              <img
                src="../image.png"
                className="h-20 ml-3 transform rotate-12"
              />
            </div>
            <div className="grid mt-5 md:grid-cols-2 gap-x-3 gap-y-10">
              {[1, 2, 3, 4].map((i) => (
                <div className="relative flex" key={i}>
                  <svg
                    version="1.1"
                    className="pr-5 my-auto w-28 h-28 md:w-20 md:h-20 xl:h-28 xl:w-28 fill-brand-gray-lighter"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="252.786px"
                    height="252.787px"
                    viewBox="0 0 252.786 252.787"
                  >
                    <g>
                      <g id="Layer_97_14_">
                        <g>
                          <path
                            d="M228.768,44.28H24.054v134.988h204.708V44.28H228.768z M126.393,48.845c2.44,0,4.416,1.975,4.416,4.415
				s-1.976,4.415-4.416,4.415s-4.416-1.975-4.416-4.415S123.953,48.845,126.393,48.845z M42.634,161.972l0.021-99.825l168.883-0.079
				l0.467,99.904H42.634z"
                          />
                          <path
                            d="M228.737,185.534H24.049H0v22.973h252.786v-22.973H228.737z M15.271,202.631c-2.983,0-5.403-2.417-5.403-5.408
				c0-2.985,2.42-5.408,5.403-5.408c2.986,0,5.408,2.423,5.408,5.408C20.68,200.214,18.258,202.631,15.271,202.631z M32.438,202.631
				c-2.986,0-5.403-2.417-5.403-5.408c0-2.985,2.417-5.408,5.403-5.408c2.983,0,5.408,2.423,5.408,5.408
				C37.846,200.214,35.421,202.631,32.438,202.631z M49.357,203.337c-2.98,0-5.403-2.417-5.403-5.408
				c0-2.986,2.422-5.408,5.403-5.408c2.989,0,5.408,2.422,5.408,5.408C54.766,200.92,52.346,203.337,49.357,203.337z
				 M161.946,202.154h-50.582v-8.46h50.582V202.154z M222.354,202.154h-50.582v-8.46h50.582V202.154z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  <div className="my-auto ">
                    <div className="text-3xl font-bold text-white md:text-xl xl:text-3xl">
                      Web development
                    </div>
                    <div className="flex mt-3 space-x-1 xl:space-x-3">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-brand-gray-darker text-white">
                        HTML
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-brand-gray-darker text-white">
                        CSS
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-brand-gray-darker text-white">
                        JAVASCRIPT
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 "></div>
        </div>
      </div>
    </div>
  );
};
export default About;
