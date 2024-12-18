import React, { useEffect, useState } from 'react';
import NavBar from '../components/common/navBar';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Experience from '../components/sections/experience';
import Footer from '../components/sections/footer';
import Hero from '../components/sections/hero';
import Loader from '../components/sections/loader/loader';
import Projects from '../components/sections/projects';
import './../styles/index.scss';
import { Seo } from '../components/seo/seo';

export default function Index() {
  // set is mounted and set to false
  const [isMounted, setIsMounted] = useState(false);

  // use effect to set is mounted to true

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  // if is mounted is true, return the following

  return (
    <React.StrictMode>
      <Seo />
      {!isMounted ? (
        <Loader />
      ) : (
        <>
          {/* <Bot /> */}
          <NavBar variants={variants} />
          <Hero variants={variants} />
          <About variants={variants} />
          <Experience variants={variants} />
          <Projects variants={variants} />
          <Contact variants={variants} />
          <Footer variants={variants} />
        </>
      )}
    </React.StrictMode>
  );
}
