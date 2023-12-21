"use client";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const iconSize = 25;
  return (
    <header className="sticky top-5 -mb-10 max-w-7xl mx-auto flex justify-between z-20 overflow-x-hidden ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex items-center gap-2"
      >
        <Link
          href="https://www.linkedin.com/in/nader-elmahdy-1b8557272/"
          target="_blank"
        >
          <CiLinkedin size={iconSize} />
        </Link>
        <Link href="https://github.com/NaderTate" target="_blank">
          <FiGithub size={iconSize} />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <MdOutlineEmail size={iconSize} className="inline-flex" />
        <p className="uppercase hidden md:inline-flex text-sm ml-2 ">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
