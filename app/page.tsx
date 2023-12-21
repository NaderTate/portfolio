"use client";
import { useEffect } from "react";
import { NextPage } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const Home: NextPage = () => {
  useEffect(() => {
    require("./lib/script");
  }, []);
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 h-screen scrollbar-hide ">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <div className=" snap-center" id="about">
        <About />
      </div>
      <div className=" snap-center" id="experience">
        <WorkExperience />
      </div>
      <div className="snap-start" id="skills">
        <Skills />
      </div>
      <div className="snap-start" id="projects">
        <Projects />
      </div>
      <div className="snap-center" id="contact">
        <Contact />
      </div>
      <Link
        href={"#hero"}
        className="absolute bottom-7 right-0 left-0 flex justify-center h-7 w-7 rounded-full border border-white m-auto hover:bg-white hover:text-black transition-colors"
      >
        <FaArrowUp className="m-auto" />
      </Link>
    </div>
  );
};

export default Home;
