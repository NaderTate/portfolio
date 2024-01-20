"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

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
        className="flex items-center gap-5"
      >
        <Link href="https://github.com/NaderTate" target="_blank">
          <FiGithub size={iconSize} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nader-elmahdy-1b8557272/"
          target="_blank"
        >
          <CiLinkedin size={iconSize} />
        </Link>
        <Link
          href="https://drive.google.com/file/d/1VnWJRLjbp74d1Lt7umILA8A5cet9hIFS/view?usp=drive_link"
          target="_blank"
        >
          Resume
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
        <a href="mailto:nadertate@gmail.com" target="_blank">
          <MdOutlineEmail size={iconSize} className="inline-flex" />
          <p className="uppercase hidden md:inline-flex text-sm ml-2 ">
            Get in touch
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
