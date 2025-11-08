import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from '../../common/jobsCard/card';
import Title from '../../common/titles';
import './index.scss';
import { motion } from 'framer-motion';

export default function Experience({ variants }) {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      allJobsJson {
        edges {
          node {
            ButtonTitle
            Items
            MainTitle
            RangeDate
            id
            Stack
            Description
            Company
          }
        }
      }
    }
  `);
  console.log("Jobs data:",data);
  const jobs = data.allJobsJson.edges;
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      variants={variants}
      viewport={{ once: true, amount: 0.08 }}
      className='experience'
      id='experience'>
      <Title text='Experience' />
      <div className='experience__cards'>
        {jobs.map(({ node }) => (
          <Card
            key={node.id}
            info={node}
            isOpen={true}
          />
        ))}
      </div>
    </motion.section>
  );
}
