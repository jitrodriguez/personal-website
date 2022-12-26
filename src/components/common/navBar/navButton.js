import React from 'react';

export default function NavButton({ to, text, close }) {
  return <a onClick={close}>{text}</a>;
}
