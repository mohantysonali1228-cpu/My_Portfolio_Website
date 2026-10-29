import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Strengths from "../components/Strengths";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home-page">
      
      <section id="home">
        <Hero />
      </section>

      
      <section id="about">
        <About />
      </section>

      
      <section id="skills">
        <Skills />
      </section>

   
      <section id="experience">
        <Experience />
      </section>

     
      <section id="projects">
        <Projects />
      </section>

      
      <section id="education">
        <Education />
      </section>

     
      <section id="strengths">
        <Strengths />
      </section>

     
      <section id="contact">
        <Contact />
      </section>

      
      <Footer />
    </main>
  );
};

export default Home;