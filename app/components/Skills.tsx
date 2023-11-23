"use client";
import Skill from "./Skill";
import { motion } from "framer-motion";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left overflow-hidden xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid-cols-3 sm:grid-cols-4 grid gap-5 ">
        <Skill img="/assets/images/html.svg" />
        <Skill img="/assets/images/css.svg" />
        <Skill img="/assets/images/javascript.svg" />
        <Skill
          directionLeft={window.innerWidth < 648 ? true : false}
          img="/assets/images/typescript.svg"
        />
        <Skill directionLeft img="/assets/images/mongodb.svg" />
        <Skill directionLeft img="/assets/images/prisma.svg" />
        <Skill directionLeft img="/assets/images/nextjs.svg" />
        <Skill directionLeft img="/assets/images/react.svg" />
        <Skill
          directionLeft={window.innerWidth < 648 ? true : false}
          img="/assets/images/sanity.svg"
        />
        <Skill img="/assets/images/figma.svg" />
        <Skill img="/assets/images/nodejs.svg" />
        <Skill img="/assets/images/openAI.svg" />
      </div>
    </motion.div>
  );
};

export default Skills;
