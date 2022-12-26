import React from 'react';

export default function Button({ text, changeFunction, id }) {
  return (
    <div
      className='button primary-text'
      onClick={() => changeFunction(id)}
      onKeyDown={() => changeFunction(id)}>
      {text}
    </div>
  );
}
