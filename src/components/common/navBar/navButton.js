import React from 'react';

export default function NavButton({ href, text, close }) {
  return (
    <a onClick={close} href={href}>
      {text}
    </a>
  );
}
