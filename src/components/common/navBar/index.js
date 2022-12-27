import React from 'react';
import Logo from '../icons/logo/logo';
import Hamburger from '../icons/hamburger';
import Close from '../icons/close';
import './navbar.scss';
import NavButton from './navButton';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { motion } from 'framer-motion';

export default function NavBar({ variants }) {
  const [navOpen, setNavOpen] = React.useState(null);
  const items = [
    { to: '#about', text: 'About me' },
    { to: '#experience', text: 'Experience' },
    { to: '#projects', text: 'Projects' },
    { to: '#contact', text: 'Contact' },
    { href: `cv_Juan_Rodriguez.pdf`, text: 'Resume' },
  ];
  const navItems = items.map((item, index) => {
    return (
      <NavButton
        key={index}
        href={item.href}
        text={item.text}
        close={() => {
          if (item.to) scrollTo(item.to);
          setNavOpen(false);
        }}
      />
    );
  });

  return (
    <motion.nav
      initial='hidden'
      animate='visible'
      variants={variants}
      className='navbar'>
      <Logo />
      <Hamburger hidden={navOpen} change={() => setNavOpen(true)} />
      <Close hidden={!navOpen} change={() => setNavOpen(false)} />
      <div
        className={`nav-buttons ${
          navOpen !== null ? (!navOpen ? 'nav-close' : 'nav-open') : 'hidden'
        }`}>
        {navItems}
      </div>
    </motion.nav>
  );
}
