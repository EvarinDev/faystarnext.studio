import GithubIcon from "@/components/GithubIcon";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

export default function Page() {
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
        </div>
      </div>

    </div>
  );
}
