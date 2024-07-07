import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"; // Corrected import
import React from "react";
import { motion } from "framer-motion";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-BPMPTZD5MZ" />
      <GoogleTagManager gtmId="GTM-PHW4TH2G" />
      <Head>
        <title>🚀 | FAYStarNext</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="🚀 | FAYStarNext" />
        <meta name="keywords" content="FAYStarNext" />
        <meta property="og:title" content="🚀 | FAYStarNext" />
        <meta property="og:description" content="Hi 👋 My name is FAY" />
        <meta property="og:url" content="https://faystarnext.studio" />
        <meta property="og:image" content="https://cdn.faystarnext.studio/backg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🚀 | FAYStarNext" />
        <meta name="twitter:description" content="🚀 | FAYStarNext" />
        <meta name="twitter:image" content="https://cdn.faystarnext.studio/backg.png" />
      </Head>
      <React.Suspense>
        <Component {...pageProps} />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHW4TH2G"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </React.Suspense>
    </>
  );
}