import React from 'react';
import B3 from './B3';

const B2 = ({btn}) => {
  return (
    <div>
      <h2>B2</h2>
      <div>{btn}</div>

      <B3 btn={btn} />
    </div>
  )
}

export default B2;
