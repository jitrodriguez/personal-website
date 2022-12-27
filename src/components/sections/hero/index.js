import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './index.scss';
import { motion } from 'framer-motion';
export default function Hero({ variants }) {
  return (
    <motion.section
      initial='hidden'
      animate='visible'
      variants={variants}
      className='hero'>
      <p className='primary-text text-center'>Hi I'm</p>
      <h1 className='accent-text text-center'>Juan Rodriguez</h1>
      <h2 className='primary-text text-center'>Software Developer</h2>
      <button
        to='#contact'
        className='primary-text button'
        onClick={() => scrollTo('#contact')}>
        CONTACT ME
      </button>
    </motion.section>
  );
}
