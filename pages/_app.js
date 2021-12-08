import { useState, useEffect } from "react";
import { Layout } from "../layout/index";
import { useRouter } from "next/router";
import Loader from "../components/loading";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={router.route} className="">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Footer />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
