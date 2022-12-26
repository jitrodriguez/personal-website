import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './index.scss';
import LinkExternal from '../icons/link-external';

export default function ProjectCard({ info }) {
  return (
    <div className='project'>
      <div className='project-descriptor'>
        <h3>{info.Title}</h3>
        <p>{info.Stack}</p>
        <a href={info.Repository}>
          Repository
          <LinkExternal />
        </a>
        {/* {info.Link && <a  />} */}
      </div>
      <GatsbyImage
        style={{ zIndex: -1, width: '100%', height: '100%' }}
        image={getImage(info.Image)}
        alt={info.Title}
        className='project-image'
      />
    </div>
  );
}
