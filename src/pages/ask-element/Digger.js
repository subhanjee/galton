import React from 'react';

const Digger = ({ callDigger }) => {
  console.log(callDigger, 'Digger');

  return (
    <div>
      <p style={{ color: 'black', fontSize: '1rem' }}>{callDigger}</p>
    </div>
  );
};

export default Digger;
