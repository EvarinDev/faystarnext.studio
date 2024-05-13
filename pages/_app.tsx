import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from "@/components/Layout";
import Loading from "@/components/loading";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import NextNavbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews key="G-BPMPTZD5MZ" gaMeasurementId="G-BPMPTZD5MZ" />
      <React.Suspense fallback={<Loading />}>
        <motion.div
          key="layout"
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
            pageExit: {
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </React.Suspense>
    </Layout>
  );
}