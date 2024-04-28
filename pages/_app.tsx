import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { Metadata } from 'next';
import { GoogleAnalytics } from "nextjs-google-analytics";

export const metadata: Metadata = {
  title: '🚀 | FAYStarNext',
  description: '🚀 | FAYStarNext',
  keywords: 'FAYStarNext',
  openGraph: {
    images: ["https://cdn.rlss.in.th/assets/img/BackGround.webp"],
    type: 'website',
    title: '🚀 | FAYStarNext',
    description: 'Hi 👋 My name is FAY',
    url: 'https://faystarnext.studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚀 | FAYStarNext',
    description: '🚀 | FAYStarNext',
    images: 'https://cdn.rlss.in.th/assets/img/BackGround.webp',
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GoogleAnalytics trackPageViews key="G-BPMPTZD5MZ" gaMeasurementId="G-BPMPTZD5MZ" />
      <Component {...pageProps} />
    </>
  );
}
