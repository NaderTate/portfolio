"use client";

import Link from "next/link";
import { NextPage } from "next";

import Hero from "./components/Hero";
import About from "./components/About";
import Posts from "./components/Posts";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

const Home: NextPage = () => {
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
      <div className="snap-start" id="posts">
        <Posts />
      </div>
      <div className="snap-center" id="contact">
        <Contact />
      </div>
      <Link
        href={"#hero"}
        className="absolute bottom-5 right-0 left-0 h-7 w-7 m-auto"
      >
        <Image src={"/logo.png"} width={30} height={30} alt="Up" />
      </Link>
    </div>
  );
};

export default Home;
