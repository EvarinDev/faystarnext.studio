import GithubIcon from "@/components/GithubIcon";
import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";

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

export default function Page() {
  const skills = [
    {
      title: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      title: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      title: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      title: "Nuxt.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
    },
    {
      title: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
    {
      title: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    }
  ]
  return (
    <div>
      <title>🚀 | FAYStarNext</title>
      <div className="bg-white text-neutral-950">
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-2xl ReadexPro-font">Hello, Everyone</h1>
          <p className="ReadexPro-font text-lg">Hi 👋 My name is Fay</p>
          <p className="ReadexPro-font text-lg">I&apos;m a Back-end Developer</p>
          <p className="ReadexPro-font text-lg">Locations: Thailand</p>
          <div className="flex flex-wrap justify-center items-center">
            <Link href="https://github.com/FAYStarNext" aria-label="GitHub">
              <GithubIcon />
            </Link>
            <Link href="https://github.com/sponsors/FAYStarNext" aria-label="DONATE ME PLS">
              <svg className="w-6 h-6text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen text-center bg-neutral-800 text-white">
        <h2 className="justify-center text-4xl font-bold">My Skill</h2>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((item) => (
            <div key={item.title} className="flex flex-col items-center m-2">
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}