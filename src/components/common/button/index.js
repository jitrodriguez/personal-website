import { Link } from 'gatsby';
import React from 'react';
import './_basebutton.scss';

export default function Button({ to, text, external }) {
  const toLink = to ? to : '#';
  return external ? (
    <a
      className='primary-text button'
      href={to}
      target='_blank'
      rel='noopener noreferrer'>
      {text}
    </a>
  ) : (
    <Link className='primary-text button' to={toLink}>
      {text}
    </Link>
  );
}
