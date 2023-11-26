"use client";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import Project from "./Project";
import { HorizontalScroll } from "../lib/helpers";

type Props = {};

const Projects = (props: Props) => {
  const projectsData: { title: string; img: string; summary: string }[] = [
    {
      title: "Excel Rank",
      img: "/assets/images/projects/Excel_Rank.webp",
      summary:
        "Excel Rank is a tool that helps business owners save their time by summarizing their business reviews on websites like Yelp. It has also support for Facebook and Instagram where you can summarize comments on each post individually and track its insights.",
    },
    {
      title: "Radio Scoop",
      img: "/assets/images/projects/Radio_Scoop.webp",
      summary:
        "Radio Scoop is a local media company in Egypt. I'm responsible for maintaining and adding new features to the website. Managing and uploading new content.",
    },
    {
      title: "Classified",
      img: "/assets/images/projects/Classified.webp",
      summary:
        "This is a website that I built and I use daily, it's simply a password manager that lets you easily create a unique password for each website you use, and you can copy-paste your email/password with a single click. It doesn't have the auto login feature like other password managers, but maybe we'll get there...",
    },
  ];
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
            <Project key={i} i={i} total={projectsData.length} {...project} />
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-green-300/10 left-0 h-[300px] 2xl:h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
