import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from "@/components/Layout";
import Loading from "@/components/loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews key="G-BPMPTZD5MZ" gaMeasurementId="G-BPMPTZD5MZ" />
      <React.Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </React.Suspense>
    </Layout>
  );
}
