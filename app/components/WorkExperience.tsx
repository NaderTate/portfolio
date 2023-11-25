"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { useEffect } from "react";
type Props = {};

const WorkExperience = (props: Props) => {
  useEffect(() => {
    require("../lib/script");
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col md:flex-row overflow-hidden relative text-left max-w-full sm:px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl ">
        Experience
      </h3>
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
          summary=""
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
          summary=""
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
          summary=""
          img="/assets/images/fiverr.svg"
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
