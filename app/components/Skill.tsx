"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = { directionLeft?: boolean; img: string; profiecency: number };

const Skill = ({ directionLeft = false, img, profiecency }: Props) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -50 : 50,
      }}
      whileInView={{
        x: 0,
      }}
      transition={{ duration: 1 }}
      className="flex group relative cursor-pointer"
    >
      <div
        className="rounded-full border border-gray-50 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32  p-6  "

        // viewport={{ once: true }}
      >
        <Image
          src={img}
          width={100}
          height={100}
          alt="Icon"
          className="rounded-lg w-full filter group-hover:grayscale transition-all ease-in-out duration-500"
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {profiecency}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
