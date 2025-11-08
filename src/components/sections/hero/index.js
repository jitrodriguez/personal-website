import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './index.scss';
import { motion } from 'framer-motion';
import ScrollCue from './scrollClue';
import HeroTagline from './heroTagline';
import Github from '../../common/icons/github';
import Linkedin from '../../common/icons/linkedin';
export default function Hero({ variants }) {
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={variants}
      role="region"
      aria-labelledby="hero-title"
      >
      <h1 id="hero-title" className="hero__title">
        Juan Rodriguez
        <span className="hero__separator" aria-hidden="true" />
      </h1>
      <h2 className="hero__subtitle">
        Senior Software Engineer
      </h2>
      <HeroTagline />
      <div className="hero__ctas">
        <a
          href="#projects"
          className="button button--primary"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#projects");
          }}
        >
          View My Work
        </a>

        {/* <a
          href="#contact"
          className="button button--ghost"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#contact");
          }}
        >
          Get In Touch
        </a> */}
      </div>

      <div className='hero__socials'>
        <Github />
        <Linkedin />
        {/* <Pluralsight /> */}
      </div>

      <ScrollCue target="#about" />


    </motion.section>
  );
}
