import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './index.scss';
export default function Hero() {
  return (
    <section className='hero'>
      <p className='primary-text text-center'>Hi I'm</p>
      <h1 className='accent-text text-center'>Juan Rodriguez</h1>
      <h2 className='primary-text text-center'>Software Developer</h2>
      <button
        to='#contact'
        className='primary-text button'
        onClick={() => scrollTo('#contact')}>
        CONTACT ME
      </button>
    </section>
  );
}
