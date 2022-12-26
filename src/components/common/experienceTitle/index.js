import React from 'react';

export default function ExperienceTitle({ text, date }) {
  return (
    <>
      <h3>{text}</h3>
      <p>{date}</p>
    </>
  );
}
