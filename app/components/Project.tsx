"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  img: string;
  title: string;
  summary: string;
  i: number;
  total: number;
};

const Project = ({ img, title, summary, i, total }: Props) => {
  return (
    <div
      key={i}
      className="lg:p-20 px-8 rounded-xl  my-10 flex-shrink-0 snap-center w-screen overflow-hidden md:p-44 h-screen flex flex-col items-center justify-center space-y-5"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1.5 }}
        transition={{ duration: 1.2 }}
        // viewport={{ once: true }}
      >
        <Image
          priority
          quality={100}
          width={3000}
          height={3000}
          className="object-contain w-[500px]"
          src={img}
          alt={title}
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-xl font-semibold text-center">
          <span className="underline decoration-green-300/50">
            Project {i + 1} of {total}:
          </span>{" "}
          {title}
        </h4>
        <p className=" md:text-left text-xs sm:text-base text-justify">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default Project;
