import React from 'react';


const Insight = ({ apiResponse }) => {
   const points = apiResponse.insight.split('\n').filter(point => point.trim() !== '');
   return (
       <div>
           {points.map((point, index) => (
               <p key={index}>{point.trim()}</p>
           ))}
       </div>
   );
};


export default Insight;