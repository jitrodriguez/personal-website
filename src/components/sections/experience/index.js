import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Button from '../../common/jobsCard/button';
import Card from '../../common/jobsCard/card';
import Title from '../../common/titles';
import { useState } from 'react';
import './index.scss';

export default function Experience() {
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
          }
        }
      }
    }
  `);
  const jobs = data.allJobsJson.edges;
  const defaultId = jobs[0].node.id;
  const info = {};
  info[defaultId] = { ...jobs[0].node };
  const [selectedId, setSelectedId] = useState(defaultId);
  const [cardOpen, setCardOpen] = useState(false);
  const formatData = (data) => {
    const buttons = [];
    data.forEach(({ node }) => {
      const { ButtonTitle, MainTitle, Items, RangeDate, id, Stack } = node;
      info[id] = { MainTitle, Items, RangeDate, Stack };
      const idName = id;
      buttons.push(
        <Button
          key={id}
          id={idName}
          text={ButtonTitle}
          changeFunction={(id) => {
            setCardOpen(true);
            setSelectedId(id);
          }}
        />
      );
    });
    return buttons;
  };
  return (
    <section id='experience'>
      <div>
        <Title text='Experience' />
      </div>
      <div className='experience-items'>
        <div className='buttons'>{jobs && formatData(jobs)}</div>
        {selectedId && (
          <Card
            info={info[selectedId]}
            isOpen={cardOpen}
            closeCard={() => {
              setCardOpen(false);
            }}
          />
        )}
      </div>
    </section>
  );
}
