"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row relative text-center md:text-left  justify-evenly items-center h-screen max-w-7xl m-auto"
    >
      <h3 className="absolute top-16 md:top-20 px-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.div
        className="flex-shrink-0"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://res.cloudinary.com/dqkyatgoy/image/upload/v1700644617/me_u8zql5.jpg"
          alt="Nader Elmahdy"
          width={300}
          height={300}
          className="rounded-full object-cover w-40 h-40 md:w-64 md:h-64 md:rounded-lg xl:w-[500px] xl:h-[600px] max-h-[80vh] mt-10 md:mt-0"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-green-300/50">little</span>{" "}
          background
        </h4>
        <p className="text-xs sm:text-base md:text-base text-justify">
          I&apos;m Nader, Full Stack development is my area of expertise, but I
          also have experience building small autonomous robots. I started to
          learn code when I was 15, and I realized that building software that
          helps other people or solves a problem is my passion. I use some of
          the applications that I built in my daily life, like my own password
          manager, and my own music player. In 2023 I got introduced to chatGPT
          and I started my AI journey by building simple chatbots on telegram
          and whastapp. Then I started building real world applications using
          openAI API or even building my own models. I&apos;m impressed how AI
          has can solve many problems that were not possible to solve before,
          and I&apos;m excited to see what the future holds for AI.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
