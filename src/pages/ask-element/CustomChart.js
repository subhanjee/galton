import React from 'react';
import ApexCharts from 'react-apexcharts';


const CustomChart = ({ chartData }) => {


   chartData = chartData.chart;
   const options = {
       chart: {
           type: chartData.type,
       },
       xaxis: {
           categories: chartData.x.value,
           title: {
               text: chartData.x.title,
           },
       },
       yaxis: {
           title: {
               text: 'Value Sales (SAR)', // You can make this dynamic as well if needed
           },
       },
   };


   // Prepare data for ApexCharts dynamically based on y
   const series = chartData.y.map(item => ({
       name: item.title,
       data: item.value,
   }));


   return (
       <div>
           <h2>{chartData.title}</h2>
           <ApexCharts options={options} series={series} type={chartData.type} height={350} />
       </div>
   );
};


export default CustomChart;
