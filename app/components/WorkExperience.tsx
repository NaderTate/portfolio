"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col md:flex-row overflow-hidden relative text-left max-w-full sm:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl ">
        Experience
      </h3>
      <div className="flex w-full space-x-5 overflow-x-scroll p-0 snap-x snap-mandatory -mb-24">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
