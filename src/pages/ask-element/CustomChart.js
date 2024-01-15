import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const CustomChart = ({ data }) => {
  // Use useEffect to handle data changes
  useEffect(() => {
    if (data) {
      // Parse JSON data
      const parsedData = JSON.parse(data);
      // Clean and set the chart data
      setChart(cleanChartData(parsedData));
    }
  }, [data]);

  const [chart, setChart] = useState();

  // Function to clean and format chart data
  const cleanChartData = (rawData) => {
    return {
      type: rawData.type,
      title: rawData.title,
      x: {
        title: rawData.x.title,
        value: rawData.x.value
      },
      y:
        rawData.y.map((yItem) => ({
          title: yItem.title,
          data: yItem.value || [] // Provide a default empty array
        })) || [] // Provide a default empty array
    };
  };

  // Log the cleaned chart data for debugging
  console.log('Cleaned Chart Data:', chart);

  const options = {
    chart: {
      type: chart?.type
    },
    xaxis: {
      categories: chart?.x?.value,
      title: {
        text: chart?.x?.title
      }
    },
    yaxis: chart?.y?.map((yItem) => ({
      title: {
        text: yItem?.title
      }
    }))
  };

  const series =
    chart?.y?.map((yItem) => ({
      name: yItem?.title,
      data: yItem?.data
    })) || []; // Provide a default empty array

  // Log options and series for debugging
  console.log('Options:', options);
  console.log('Series:', series);

  return (
    <div>
      <h2>{chart?.title}</h2>
      <ApexCharts options={options} series={series} type={chart?.type} height={350} />
    </div>
  );
};

export default CustomChart;
