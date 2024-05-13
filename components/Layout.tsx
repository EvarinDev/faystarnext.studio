import NextNavbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
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
            <NextNavbar />
            <main>{children}</main>
        </>
    )
}