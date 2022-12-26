import React from 'react';
import Logo from '../icons/logo/logo';
import Hamburger from '../icons/hamburger';
import Close from '../icons/close';
import './navbar.scss';
import NavButton from './navButton';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function NavBar() {
  const [navOpen, setNavOpen] = React.useState(null);
  const items = [
    { to: '#about', text: 'About me' },
    { to: '#experience', text: 'Experience' },
    { to: '#projects', text: 'Projects' },
    { to: '#contact', text: 'Contact' },
    { to: '', text: 'Resume' },
  ];
  const navItems = items.map((item, index) => {
    return (
      <NavButton
        key={index}
        to={item.to}
        text={item.text}
        close={() => {
          scrollTo(item.to);
          setNavOpen(false);
        }}
      />
    );
  });

  return (
    <nav className='navbar'>
      <Logo />
      <Hamburger hidden={navOpen} change={() => setNavOpen(true)} />
      <Close hidden={!navOpen} change={() => setNavOpen(false)} />
      <div
        className={`nav-buttons ${
          navOpen !== null ? (!navOpen ? 'nav-close' : 'nav-open') : 'hidden'
        }`}>
        {navItems}
      </div>
    </nav>
  );
}
