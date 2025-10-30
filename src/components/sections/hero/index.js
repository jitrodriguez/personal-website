import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './index.scss';
import { motion } from 'framer-motion';
import ScrollCue from './scrollClue';
import HeroTagline from './heroTagline';
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
          href="#work"
          className="button button--primary"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#work");
          }}
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="button button--ghost"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#contact");
          }}
        >
          Get In Touch
        </a>
      </div>

      <ScrollCue target="#about" />


    </motion.section>
  );
}
