import React from 'react';
import ApexCharts from 'react-apexcharts';

const CustomChart = ({ chartData }) => {
  // Clean up the data and remove unnecessary characters
  const cleanChartData = {
    type: chartData?.type,
    title: chartData?.title,
    x: {
      title: chartData?.x?.title,
      value: chartData?.x?.value.map((item) => item.replace(/\n/g, '').trim()) // Remove \n and extra spaces
    },
    y: [
      {
        title: chartData?.y?.[0]?.title,
        data: chartData?.y?.[0]?.value
      }
    ]
  };

  const options = {
    chart: {
      type: cleanChartData?.type
    },
    xaxis: {
      categories: cleanChartData?.x?.value,
      title: {
        text: cleanChartData?.x?.title
      }
    },
    yaxis: {
      title: {
        text: cleanChartData?.y?.[0]?.title
      }
    }
  };

  const series = [
    {
      name: cleanChartData?.y?.[0]?.title,
      data: cleanChartData?.y?.[0]?.data // Use 'data' property within the series
    }
  ];

  return (
    <div>
      <h2>{cleanChartData?.title}</h2>
      <ApexCharts options={options} series={series} type={cleanChartData?.type} height={350} />
    </div>
  );
};

export default CustomChart;
