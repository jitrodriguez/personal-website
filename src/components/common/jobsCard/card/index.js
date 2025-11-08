import React from 'react';
import './index.scss';
import Close from '../../icons/close';

export default function Card({ info}) {
  const { MainTitle, Items, RangeDate, Stack,Description, Company } = info;
  console.log("Card info:",info);
  return (
    <div className='card'>
        <h3 className='card__title'>{MainTitle}</h3>
        <p className='card__date'>{RangeDate}</p>
        <p>{Company}</p>
        <p className='card__description'>{Description}</p>
        {/* <p>{Stack.join(' | ')}</p> */}
        {/* <Close hidden={false} change={closeCard} /> */}
      </div>
  );
}
