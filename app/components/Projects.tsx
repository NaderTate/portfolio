"use client";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

import { HorizontalScroll } from "../lib/helpers";
import { projectsData } from "../lib/projects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50"
        onClick={() => {
          HorizontalScroll("projectsContainer", window.innerWidth);
        }}
      >
        <IoChevronForwardCircleOutline size={25} />
      </button>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50  transition-size"
        onClick={() => {
          HorizontalScroll("projectsContainer", -window.innerWidth);
        }}
      >
        <IoChevronBackCircleOutline size={25} />
      </button>
      <div
        id="projectsContainer"
        className=" w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thumb-green-300/80 scrollbar-thin scrollbar-track-gra/20"
      >
        {projectsData.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              i={i}
              total={projectsData.length}
              {...project}
            />
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-green-300/10 left-0 h-[300px] 2xl:h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
