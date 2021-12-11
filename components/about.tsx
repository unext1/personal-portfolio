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
                src="../happy.png"
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
  );
};
export default About;
