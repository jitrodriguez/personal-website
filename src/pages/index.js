import React from 'react';
import NavBar from '../components/common/navBar';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Experience from '../components/sections/experience';
import Footer from '../components/sections/footer';
import Hero from '../components/sections/hero';
import Projects from '../components/sections/projects';
import './../styles/index.scss';

export default function Index() {
  return (
    <React.StrictMode>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}
