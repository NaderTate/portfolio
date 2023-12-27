"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import { HorizontalScroll } from "../lib/helpers";

type Props = {};

const WorkExperience = ({}: Props) => {
  useEffect(() => {
    require("@/app/lib/script");
    // the reason I import the script in a useEffect is because I want to make sure that the DOM is loaded before I run the script, otherwise I get an error "document is not defined"
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col md:flex-row overflow-hidden relative text-left max-w-full sm:px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl ">
        Experience
      </h3>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50"
        onClick={() => {
          HorizontalScroll("cards", window.innerWidth);
        }}
      >
        <IoChevronForwardCircleOutline size={25} />
      </button>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50  transition-size"
        onClick={() => {
          HorizontalScroll("cards", -window.innerWidth);
        }}
      >
        <IoChevronBackCircleOutline size={25} />
      </button>
      <div
        className="flex 2xl:justify-center w-full space-x-5 overflow-x-scroll p-0 snap-x snap-mandatory -mb-16 scrollbar-thumb-green-300/80 scrollbar-thin scrollbar-track-gra/20"
        id="cards"
      >
        <ExperienceCard
          company="Athink"
          skills={[
            "/assets/images/typescript.svg",
            "/assets/images/nextjs.svg",
            "/assets/images/react.svg",
            "/assets/images/mongodb.svg",
            "/assets/images/openAI.svg",
          ]}
          title="Founder of Athink"
          summary={[
            "Athink is a tech agency providing software solutions for small-medium businesses.",
            "I manage most of the stuff like hiring new talents, doing client meetings, and managing the projects.",
            "Currently focused on AI solutions like chatbots and GPT assistants.",
          ]}
          img="/assets/images/athink.svg"
        />
        <ExperienceCard
          company="Radio Scoop"
          skills={[
            "/assets/images/typescript.svg",
            "/assets/images/nextjs.svg",
            "/assets/images/mongodb.svg",
          ]}
          title="Content & Website manager"
          summary={[
            "Radio Scoop is a local Media company in Egypt.",
            "I'm responsible for maintaining and adding new features to the website.",
            "Managing and uploading new content.",
          ]}
          img="/assets/images/radio.svg"
        />
        <ExperienceCard
          company="Fiverr"
          skills={[
            "/assets/images/typescript.svg",
            "/assets/images/nextjs.svg",
            "/assets/images/css.svg",
            "/assets/images/figma.svg",
          ]}
          title="Freelancer"
          summary={[
            "Over 4 years of experience in freelancing on differenent platforms.",
            "The majority of work is done solo, but I also worked with teams on bigger projects.",
          ]}
          img="/assets/images/fiverr.svg"
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
