import React from 'react';

export default function Button({ text, changeFunction, id, selectedId }) {
  // TODO: Change this to an interactive button, so that it can be clicked and selected by nvda
  return (
    <button
      className={`button primary-text ${selectedId === id ? 'selected' : ''}`}
      onClick={() => changeFunction(id)}
      onKeyDown={() => changeFunction(id)}>
      {text}
    </button>
  );
}
