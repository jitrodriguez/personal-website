import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './index.scss';
import LinkExternal from '../icons/link-external';

export default function ProjectCard({ info }) {
  return (
    <div className='project'>
      <a href={info.Link??info.Repository} className='project__title' target='__blank'>
        <h3>{info.Title}</h3><LinkExternal />
      </a>
      <p className='project__description'>{info.Description}</p>
      {info.Repository && (
          <a className='project__repo' href={info.Repository} target='__blank'>
            View Repo
            <LinkExternal />
          </a>
        )}
        {!info.Repository && info.Link && (
          <a className='project__repo' href={info.Link} target='__blank'>
            View more
            <LinkExternal />
          </a>
        )}
      <GatsbyImage
        image={getImage(info.Image)}
        alt={info.Title}
        className='project__image'
      />
    </div>
  );
}
