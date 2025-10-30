import React from 'react';
import Button from '../../common/button';
import Github from '../../common/icons/github';
import Linkedin from '../../common/icons/linkedin';
import './index.scss';
import { motion } from 'framer-motion';

export default function Contact({ variants }) {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      variants={variants}
      viewport={{ once: true, amount: 0.3 }}
      className='contact'
      id='contact'>
      <h2>Contact</h2>
      <div className='contact-buttons'>
        <Button
          text={'Send me an email'}
          to='mailto:jitrodriguez@hotmail.com'
          external={true}
        />
        <Button
          text={'Say hello on LinkedIn'}
          to='https://www.linkedin.com/in/juan-rodriguez-it/'
          external={true}
        />
      </div>

      <div className='social-buttons'>
        <Github />
        <Linkedin />
        {/* <Pluralsight /> */}
      </div>
    </motion.section>
  );
}
