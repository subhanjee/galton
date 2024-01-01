import React from 'react';


const Digger = ({ apiResponse }) => {
   console.log(apiResponse);
   const points = apiResponse.digger_1.split('\n').filter(point => point.trim() !== '');
   console.log(points);
   return (
       <div>
           {points.map((point, index) => (
               <p key={index}>{point.trim()}</p>
           ))}
       </div>
   );
};


export default Digger;

