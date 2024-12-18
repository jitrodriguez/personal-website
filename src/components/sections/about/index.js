import React from 'react'
import Title from '../../common/titles'
import './index.scss'
import { motion } from 'framer-motion'

export default function About({ variants }) {
  const TECH_STACK = [
    {
      category: 'Languages',
      items: ['JavaScript (ES6)', 'TypeScript', 'Python'],
    },
    {
      category: 'Frameworks',
      items: ['Node Js', 'Nest Js', 'Next Js', 'React', 'Flask'],
    },
    {
      category: 'Cloud & Tools',
      items: [
        'Bot Services - Azure',
        'UiPath',
        'Microsoft Power Platform Suite',
      ],
    },
  ]

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      variants={variants}
      viewport={{ once: true, amount: 0.3 }}
      aria-labelledby='about-title'
      id='about'
    >
      <Title
        text='About me'
        id='about-title'
      />
      <div className='about-content'>
      <p>
        Hello, I'm Juan, a software developer and electronic engineering
        graduate.
      </p>
      <p>
        My programming journey began in 2018, creating small interfaces to solve
        engineering tasks. As I explored web development, I discovered my true
        passion:{' '}
        <strong>developing software that makes a meaningful impact.</strong>
      </p>
      <p>
        Currently, I balance my time between professional software development
        at BBVA and teaching programming to technology enthusiasts.
      </p>
      <div className='tech-stack'>
        <h3>My Technology Ecosystem</h3>
        {TECH_STACK.map((category, index) => (
          <div
            key={index}
            className='tech-category'
          >
            <h4>{category.category}</h4>
            <ul className='skills'>
              {category.items.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      
    </motion.section>
  )
}
