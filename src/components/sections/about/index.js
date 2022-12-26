import React from 'react';
import Title from '../../common/titles';
import './index.scss';

export default function About() {
  return (
    <section id='about'>
      <Title text='About me' />
      <p>
        Hello, my name is Juan, I am a graduate in electronic engineering and
        software developer.
      </p>
      <p>
        I started my hobby for programming in 2018 creating small interfaces to
        solve daily engineering tasks and little by little I discovered the
        wonderful web world, I discovered that I really enjoy solving people's
        problems through software development. Currently I teach programming to
        technology enthusiasts in my free time and I'm a software developer at
        Devsu.
      </p>
      <p>As of today I have worked on multiple technologies such as:</p>
      <ul className='skills'>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node Js</li>
        <li>Bot Services - Azure</li>
        <li>Flask</li>
        <li>Nest Js</li>
        <li>Next Js</li>
      </ul>
    </section>
  );
}
