import { useState } from "react";

import Header from "../components/header";
import About from "components/about";

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
