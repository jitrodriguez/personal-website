import React from 'react'
import Title from '../../common/titles'
import './index.scss'
import { motion } from 'framer-motion'

export default function About({ variants }) {

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      variants={variants}
      viewport={{ once: true, amount: 0.3 }}
      aria-labelledby='about-title'
      id='about'
      className='about'
    >
      <Title
        text='About Me'
        id='about-title'
      />
      <div className="story">
        <p className="story__intro">
          I’m a front-end engineer passionate about crafting accessible, pixel-perfect interfaces where thoughtful design meets robust engineering. I care about semantics, performance budgets, and usability to build inclusive experiences that feel effortless.
          <br /><br />
          Currently I’m a Senior Web UI Engineer & Release Manager at BBVA Perú, specializing in React, LitElement, design systems, and WCAG 2.1 AA. I lead front-end architecture, ship reusable components, and automate workflows—like Glopilot—to deliver secure, compliant, high-performance products in regulated environments.
        </p>

        <div className="story__metrics">
          <div className="metric">4+ yrs · Frontend</div>
          <div className="metric">95+ Lighthouse Perf</div>
          <div className="metric">20+ PR Reviews/mo</div>
        </div>
      </div>


      <div className="stack">
        <section aria-labelledby="s-lang">
          <h3 id="s-lang" className="stack__title">Languages — Daily drivers</h3>
          <ul className="chips">
            <li><p className="chip" aria-label="JavaScript">JavaScript</p></li>
            <li><p className="chip" aria-label="TypeScript">TypeScript</p></li>
            <li><span className="chip">Python</span></li>
          </ul>
        </section>

        <section aria-labelledby="s-fw">
          <h3 id="s-fw" className="stack__title">Frameworks & Libraries — Production</h3>
          <ul className="chips" role="list">
            <li><div className="chip" >React</div></li>
            <li><div className="chip" >Next.js</div></li>
            <li><div className="chip" >LitElement</div></li>
            <li><span className="chip">NestJS</span></li>
          </ul>
        </section>

        <section aria-labelledby="s-tools">
          <h3 id="s-tools" className="stack__title">Tools & Platforms — CI/CD & Cloud</h3>
          <ul className="chips" role="list">
            <li><span className="chip">Docker</span></li>
            <li><span className="chip">CI/CD</span></li>
            <li><span className="chip">Azure</span></li>
            <li><span className="chip">GitHub Actions</span></li>
          </ul>
        </section>
      </div>

    </motion.section>
  )
}
