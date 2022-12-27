import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ProjectCard from '../../common/projectCard';
import { motion } from 'framer-motion';

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
      viewport={{ once: true, amount: 0.3 }}
      id='projects'>
      <h2>Projects</h2>
      <div className='projects'>
        {data.allProjectImportantJson.edges.map(({ node }) => (
          <ProjectCard key={node.id} info={node} />
        ))}
      </div>
    </motion.section>
  );
}
