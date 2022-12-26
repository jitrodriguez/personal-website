import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ProjectCard from '../../common/projectCard';

export default function Projects() {
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
    <section id='projects'>
      <h2>Projects</h2>
      <div className='projects'>
        {data.allProjectImportantJson.edges.map(({ node }) => (
          <ProjectCard key={node.id} info={node} />
        ))}
      </div>
    </section>
  );
}
