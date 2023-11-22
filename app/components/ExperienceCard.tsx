"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[600px] snap-center py-10 bg-[#292929] lg:opacity-40 hover:opacity-100 transition-opacity">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={"/assets/images/athink.svg"}
          width={100}
          height={100}
          alt="Icon"
          className="rounded-full w-20 h-20 xl:w-20 xl:h-20"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Owner of Athink</h4>
        <p className="font-bold text-xl mt-1">Athink</p>
        <div className="flex gap-x-2 my-2">
          <Image
            src={"/assets/images/typescript.svg"}
            width={30}
            height={30}
            alt="Icon"
            className="rounded-lg"
          />
          <Image
            src={"/assets/images/typescript.svg"}
            width={30}
            height={30}
            alt="Icon"
            className="rounded-lg"
          />
          <Image
            src={"/assets/images/typescript.svg"}
            width={30}
            height={30}
            alt="Icon"
            className="rounded-lg"
          />
        </div>
        {/* <p className="uppercase py-5 text-gray-300">4/2022 - Present</p> */}
        <ul className="list-disc space-y-2 ml-5 text-sm">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
