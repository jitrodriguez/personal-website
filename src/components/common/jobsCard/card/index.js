import React from 'react';
import './index.scss';
import Close from '../../icons/close';

export default function Card({ info, isOpen, closeCard }) {
  const { MainTitle, Items, RangeDate, Stack } = info;
  return (
    <div className={`card-container ${isOpen ? 'open' : 'close'}`}>
      <div className={`card`}>
        <h3>{MainTitle}</h3>
        <p className='dates'>{RangeDate}</p>
        <ul>
          {Items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{Stack.join(' | ')}</p>
        <Close hidden={false} change={closeCard} />
      </div>
    </div>
  );
}
