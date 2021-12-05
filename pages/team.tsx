import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "lib/framer-settings";

const Team = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="grid-cols-1 xl:grid-cols-6 grid gap-10 bg-brand-dark-900 p-5 lg:p-20 ">
        <div className="bg-brand-purple col-span-1 xl:col-span-2 rounded-xl shadow relative p-10">
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
        </div>
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.2,
            },
          }}
          className="bg-brand-purple col-span-1 xl:col-span-4 rounded-xl shadow-2xl p-10 relative"
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
};

export default Team;
