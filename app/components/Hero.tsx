"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, This is Nader",
      "<ProblemSolver />",
      "<AI_Developer />",
      "<NoRest />",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="https://res.cloudinary.com/dqkyatgoy/image/upload/v1700575612/me_qhrcjb.jpg"
          alt="Nader Elmahdy"
          width={130}
          height={130}
          className="rounded-full -mt-24"
        />
      </motion.div>
      <div className="z-20">
        <h2 className="text-gray-500 tracking-[15px] pb-2">
          🥷 Full Stack Developer
        </h2>
        <h1 className="text-xl sm:text-3xl lg:text-6xl font-semibold px-10">
          <span> {text}</span>
          <Cursor cursorColor="rgb(134 239 172)" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
