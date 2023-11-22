"use client";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = { directionLeft?: boolean };

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="flex group relative cursor-pointer">
      <motion.div
        className="rounded-full border border-gray-50 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 flex justify-center items-center p-6 sm:p-6 aspect-square"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={"/assets/images/typescript.svg"}
          width={100}
          height={100}
          alt="Icon"
          className="rounded-lg w-full filter group-hover:grayscale  transition-all ease-in-out duration-500"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
