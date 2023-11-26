"use client";
import { useEffect, useState } from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
type Props = {};

const Skills = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left overflow-hidden xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid-cols-3 sm:grid-cols-4 grid gap-5 ">
        <Skill profiecency={95} img="/assets/images/html.svg" />
        <Skill profiecency={85} img="/assets/images/css.svg" />
        <Skill profiecency={80} img="/assets/images/javascript.svg" />
        <Skill
          profiecency={95}
          directionLeft={window?.innerWidth < 648 ? true : false}
          img="/assets/images/typescript.svg"
        />
        <Skill
          profiecency={95}
          directionLeft
          img="/assets/images/mongodb.svg"
        />
        <Skill profiecency={98} directionLeft img="/assets/images/prisma.svg" />
        <Skill profiecency={97} directionLeft img="/assets/images/nextjs.svg" />
        <Skill profiecency={93} directionLeft img="/assets/images/react.svg" />
        <Skill
          profiecency={78}
          directionLeft={window?.innerWidth < 648 ? true : false}
          img="/assets/images/sanity.svg"
        />
        <Skill profiecency={90} img="/assets/images/figma.svg" />
        <Skill profiecency={89} img="/assets/images/nodejs.svg" />
        <Skill profiecency={75} img="/assets/images/openAI.svg" />
      </div>
    </motion.div>
  );
};

export default Skills;
