"use client";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
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
            <div className="lg:p-20 px-8 rounded-xl shadow-xl my-10 flex-shrink-0 snap-center w-screen overflow-x-hidden md:p-44 h-screen flex flex-col items-center justify-center space-y-5">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1.5 }}
                transition={{ duration: 1.2 }}
                // viewport={{ once: true }}
                className="w-full max-w-lg"
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700611200&semt=sph"
                alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl font-semibold text-center">
                  <span className="underline decoration-green-300/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  Test Project
                </h4>
                <p className="text-center md:text-left text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reiciendis ratione nostrum ducimus libero maxime. Libero,
                  asperiores ratione unde praesentium exercitationem quasi
                  eligendi ipsum voluptates, corrupti odit incidunt, laborum
                  illo illum?
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
