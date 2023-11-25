"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  company: string;
  summary: string;
  skills: string[];
};

const ExperienceCard = ({ img, title, company, summary, skills }: Props) => {
  return (
    <article className="card flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[300px] md:w-[600px] xl:w-[600px] snap-center p-10 bg-[#292929] lg:opacity-75 transition-opacity">
      <div className="card-content px-5">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={img}
            width={100}
            height={100}
            alt="Icon"
            className="rounded-full w-20 h-20 xl:w-20 xl:h-20 m-auto"
          />
        </motion.div>
        <div className="px-0 md:px-10">
          <h4 className="text-2xl font-light">{title}</h4>
          <p className="font-bold text-xl mt-1">{company}</p>
          <div className="flex gap-x-2 my-2">
            {skills.map((skill) => {
              return (
                <Image
                  key={skill}
                  src={skill}
                  width={30}
                  height={30}
                  alt="Icon"
                  className="rounded-lg"
                />
              );
            })}
          </div>
          {/* <p className="uppercase py-5 text-gray-300">4/2022 - Present</p> */}
          <ul className="list-disc space-y-2 ml-5 text-sm">
            <li>
              Summary Summary Summary Summary Summary Summary Summary Summary
            </li>
            <li>Summary Summary Summary Summary</li>
            <li>Summary</li>
            <li>Summary</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
