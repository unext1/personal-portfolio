import { useState, useEffect } from "react";
import { Layout } from "../layout/index";
import { useRouter } from "next/router";
import Loader from "../components/loading";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Footer from "../layout/footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimateSharedLayout type="crossFade">
      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route}>
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
    </AnimateSharedLayout>
  );
}

export default MyApp;
