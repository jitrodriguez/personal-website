import React from 'react';
export default function Hamburger({ hidden, change }) {
  return (
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 24 24'
        className='hamburger'
        preserveAspectRatio='none'>
        <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
      </svg>
  );
}
