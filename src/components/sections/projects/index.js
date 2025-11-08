import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ProjectCard from '../../common/projectCard';
import { motion } from 'framer-motion';
import './index.scss';
import Title from '../../common/titles';

export default function Projects({ variants }) {
  const data = useStaticQuery(graphql`
    query ImportantProjects {
      allProjectImportantJson {
        edges {
          node {
            Link
            Repository
            Stack
            Title
            Description
            id
            Image {
              childImageSharp {
                gatsbyImageData(width: 350)
              }
            }
          }
        }
      }
    }
  `);
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      variants={variants}
      viewport={{ once: true, amount: 0.08 }}
      id='projects'
      className='projects'>
      <Title text='Projects' />
      <div className='projects__cards'>
        {data.allProjectImportantJson.edges.map(({ node }) => (
          <ProjectCard key={node.id} info={node} />
        ))}
      </div>
    </motion.section>
  );
}
