import GithubIcon from "@/components/GithubIcon";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

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
      title: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      title: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    }
  ]

  const scrollDown = () => {
    const skillElement = document.getElementById("skill");
    if (skillElement) {
      window.scrollTo({
        top: skillElement.offsetTop,
        behavior: "smooth"
      });
    }
  };
  const words = "I MAKE EASY PROJECTS".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <div className="bg-white text-white" style={{
        background: `linear-gradient(rgb(0 0 0 / 0.2), rgb(0 0 0 / 0.2)), url(https://cdn.faystarnext.studio/20230806_151743.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-2xl ReadexPro-font text-inherit">Hello, Everyone</h1>
          <p className="ReadexPro-font text-lg">Hi 👋 My name is Fay</p>
          <p className="text-xl ReadexPro-font">Contact Me</p>
          <p className="text-lg ReadexPro-font">Mail: faystarnext@gmail.com</p>
          <p className="ReadexPro-font text-lg">Locations: Thailand</p>
          <motion.div
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                style={{ marginRight: "5px" }}
                key={index}
                className="ReadexPro-font text-lg"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex flex-wrap justify-center items-center">
            <Link href="https://github.com/FAYStarNext" aria-label="GitHub">
              <GithubIcon />
            </Link>
          </div>
          <div className="fixed bottom-4 right-4">
            <Button isIconOnly color="warning" variant="faded" aria-label="Down" onClick={scrollDown}>
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <section id="skill">
        <div className="flex flex-col items-center justify-center h-screen text-center bg-neutral-800 text-white">
          <h2 className="justify-center text-4xl font-bold">My Skill</h2>
          <div className="flex flex-wrap justify-center items-center">
            {skills.map((item) => (
              <div key={item.title} className="flex flex-col items-center m-2">
                <Image src={item.icon} alt={item.title} width={64} height={64} fetchPriority="high" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}