import { NextPage } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Home: NextPage = () => {
  return (
    <div className="snap-y snap-mandatory overflow-scroll z-0 h-screen no-scrollbar ">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>

      <section id="hero" className="snap-start h-screen">
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
    </div>
  );
};

export default Home;
