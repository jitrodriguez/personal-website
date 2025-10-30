import React from 'react';
import { motion } from 'framer-motion';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Hamburger from '../icons/hamburger';
import Close from '../icons/close';
import './navbar.scss';

const NavBarContext = React.createContext(null);

const useNavBar = () => {
  const ctx = React.useContext(NavBarContext);
  if (!ctx) throw new Error('NavBar compound components must be used inside <NavBar>');
  return ctx;
};


const NavBarRoot = ({ variants, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen(prev => !prev), []);
  const value = React.useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle]);

  return (
    <NavBarContext.Provider value={value}>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={variants}
        aria-label="Main navigation"
        className={`navbar ${isOpen ? 'navbar-open' : 'navbar-close'}`}
      >
        {children}
      </motion.nav>
    </NavBarContext.Provider>
  );
};


const NavBarToggle = React.memo(function NavBarToggle({ type = 'open', label }) {
  const { isOpen, open, close } = useNavBar();
  const Icon = type === 'open' ? Hamburger : Close;
  const hidden = type === 'open' ? isOpen : !isOpen;
  const handleClick = type === 'open' ? open : close;

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="nav-links"
      aria-label={label}
      className={`navbar__toggle navbar__toggle-${type}`}
      onClick={handleClick}
      hidden={hidden}
    >
      <Icon />
    </button>
  );
});

const NavBarLinks = React.memo(function NavBarLinks({ children }) {
  const { isOpen } = useNavBar();

  return (
    <ul
      className={`navbar__items navbar__items-${isOpen ? 'open' : 'close'}`}
    >
      {children}
    </ul>
  );
});

const NavBarLink = React.memo(function NavBarLink({ to, href, text }) {
  const { close, isOpen } = useNavBar();

  const handleClick = React.useCallback(
    event => {
      if (to) {
        event.preventDefault();
        scrollTo(to);
      }
      close();
    },
    [close, to]
  );

  return (
    <li className={`navbar__item ${isOpen ? 'navbar__item-open' : 'navbar__item-close'}`}>
      <a
        href={href ?? to}
        onClick={handleClick}
        className='navbar__link'
      >
        {text}
      </a>
    </li>
  );
});


const NavBar = Object.assign(NavBarRoot, {
  Toggle: NavBarToggle,
  Links: NavBarLinks,
  Link: NavBarLink,
});

export default NavBar;