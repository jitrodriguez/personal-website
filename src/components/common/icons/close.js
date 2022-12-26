import React from 'react';

export default function Close({ hidden, change }) {
  return (
    <div className={`close-button ${hidden ? 'hidden' : ''}`} onClick={change}>
      <svg width='100%' height='100%' viewBox='0 0 24 24' className='close'>
        <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
      </svg>
    </div>
  );
}
