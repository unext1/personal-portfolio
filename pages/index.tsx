import Header from "../components/header";
import About from "components/about";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Header />
      <About />
      <div className="relative flex items-center py-28 md:py-48 ">
        <div className="w-full h-full mx-auto">
          <div className="relative justify-center w-full h-full text-center">
            <h1 className="text-5xl font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-red-500 to-blue-700 md:text-8xl">
              About me
            </h1>
            <p
              className="mt-1 text-xs font-bold text-white uppercase sm:text-sm"
              style={{ letterSpacing: "0.8em" }}
            >
              WEB DEVELOPER
            </p>
            <p className="mt-8 text-sm text-white sm:mt-8 md:text-base xl:px-80">
              I&apos;m a 18 year old programmer who can solve your problems.
              I&apos;ve been programing since 14 years old and in these years I
              got better at problem solving, communication and of course web
              development. The websites you saw above is just a tip of the
              iceberg.
            </p>
            <div className="mt-3">
              <Link href="/contact">
                <a className="text-xs text-white underline uppercase">
                  Work with me !
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
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
      src="/project1.webp"
      alt="Detail of zipper pull with tan leather and silver rivet."
      className="object-cover object-center w-full h-full transition duration-150 rounded-xl 5 roup-hover:scale-95"
    />
  </div>
</div>
</div> */
