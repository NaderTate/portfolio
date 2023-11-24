"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3];
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
      <div className=" w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thumb-green-300/80 scrollbar-thin scrollbar-track-gra/20">
        {projects.map((_, i) => {
          return (
            <div className="lg:p-20 px-8 rounded-xl  my-10 flex-shrink-0 snap-center w-screen overflow-hidden md:p-44 h-screen flex flex-col items-center justify-center space-y-5">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1.5 }}
                transition={{ duration: 1.2 }}
                // viewport={{ once: true }}
              >
                <Image
                  quality={100}
                  width={900}
                  height={900}
                  className="object-contain w-[500px]"
                  src="/assets/images/projects/Excel_Rank.png"
                  alt=""
                />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl font-semibold text-center">
                  <span className="underline decoration-green-300/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  Excel Rank
                </h4>
                <p className="text-center md:text-left text-lg">
                  Excel Rank is a tool that helps business owners save their
                  time by summarizing their business reviews on websites like
                  Yelp. It has also support for Facebook and Instagram where you
                  can summarize comments on each post individually and track its
                  insights.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-green-300/10 left-0 h-[300px] 2xl:h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
