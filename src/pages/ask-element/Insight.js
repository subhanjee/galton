import React from 'react';

const Insight = ({ callInsightor }) => {
  console.log(callInsightor, 'Insight');

  return (
    <div>
      <p style={{ color: 'black', fontSize: '1rem' }}>{callInsightor}</p>
    </div>
  );
};

export default Insight;
