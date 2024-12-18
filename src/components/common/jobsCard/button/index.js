import React from 'react';

export default function Button({ text, changeFunction, id, selectedId }) {
  return (
    <div
      className={`button primary-text ${selectedId === id ? 'selected' : ''}`}
      onClick={() => changeFunction(id)}
      onKeyDown={() => changeFunction(id)}>
      {text}
    </div>
  );
}
