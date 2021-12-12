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
    <div className="mt-20">
      <div className="grid w-full lg:grid-cols-4 gap-x-16">
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
            <div className="relative flex w-full mb-20 shadow-xl cursor-pointer group lg:grid lg:grid-cols-5 bg-brand-dark-800 rounded-xl">
              <div className="col-span-1 px-10 my-auto md:col-span-2">
                <div className="absolute left-0 right-0 mx-auto w-28 -top-3 bg-brand-green rounded-xl">
                  <h1 className="text-center text-white uppercase">
                    Affiliate
                  </h1>
                </div>
                <h1 className="mb-2 text-xl font-semibold text-white md:text-4xl tec">
                  Riiski
                </h1>
                <p className="text-sm tracking-wider uppercase md:text-lg text-brand-gray-lighter">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
              <div className="flex items-center flex-auto w-5/6 my-auto align-middle md:w-full md:col-span-3 justify-items-center ">
                <div className="h-full bg-black rounded-r-xl">
                  <img
                    src="/project1.png"
                    alt="Detail of zipper pull with tan leather and silver rivet."
                    className="object-cover object-center w-full h-full py-10 transition duration-150 opacity-75 group-hover:scale-95"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex w-full mb-20 shadow-xl cursor-pointer group lg:grid lg:grid-cols-5 bg-brand-dark-800 rounded-xl">
              <div className="flex items-center flex-auto w-5/6 my-auto align-middle md:w-full md:col-span-3 justify-items-center ">
                <div className="h-full bg-black rounded-l-xl ">
                  <img
                    src="/project2.png"
                    alt="Detail of zipper pull with tan leather and silver rivet."
                    className="object-cover object-center w-full h-full py-10 transition duration-150 opacity-75 group-hover:scale-95"
                  />
                </div>
              </div>
              <div className="w-full col-span-1 px-10 my-auto text-right md:col-span-2">
                <div className="absolute left-0 right-0 mx-auto w-28 -top-3 bg-brand-green rounded-xl">
                  <h1 className="text-center text-white uppercase">
                    Affiliate
                  </h1>
                </div>
                <h1 className="mb-2 text-xl font-semibold text-white md:text-4xl">
                  Shapez
                </h1>
                <p className="text-sm tracking-wider uppercase md:text-lg text-brand-gray-lighter">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
