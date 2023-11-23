import { motion } from "framer-motion";
type Props = {};

function BackgroundCircles({}: Props) {
  const sharedStyles =
    "absolute border border-[#1e1714]  rounded-full  aspect-square ";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center mt-[240px]"
    >
      <div className={sharedStyles + "h-[180px] animate-ping"} />
      <div className={sharedStyles + "h-[270px] "} />
      <div className={sharedStyles + "h-[450px] "} />
      <div
        className={
          sharedStyles + "h-[580px]  animate-pulse border-green-300 opacity-20"
        }
      />
      <div className={sharedStyles + "h-[700px] w-[700px]"} />
    </motion.div>
  );
}

export default BackgroundCircles;
