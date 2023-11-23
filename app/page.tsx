import { NextPage } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
      <div className="snap-center" id="contact">
        <Contact />
      </div>
      <div className="absolute bottom-7 right-0 left-0 flex justify-center h-7 w-7 rounded-full border border-white m-auto"></div>
    </div>
  );
};

export default Home;
