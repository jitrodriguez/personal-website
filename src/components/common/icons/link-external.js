import React from 'react';

export default function LinkExternal() {
  return (
    <div className='link-external-button'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 24 24'
        className='link-external'>
        <path d='m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z'></path>
        <path d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z'></path>
      </svg>
    </div>
  );
}
