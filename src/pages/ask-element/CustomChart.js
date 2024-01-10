import React from 'react';
import ApexCharts from 'react-apexcharts';

const CustomChart = ({ data }) => {
  // Guard clause to handle undefined data
  if (!data) {
    console.error(data, 'Data is undefined.');
    return null;
  }

  // Clean up the data and remove unnecessary characters
  const cleanChartData = {
    type: data?.type,
    title: data?.title,
    x: {
      title: data?.x?.title,
      value: data?.x?.value?.map((item) => item.replace(/\n/g, '').trim()) || [] // Provide a default empty array
    },
    y:
      data?.y?.map((yItem) => ({
        title: yItem?.title,
        data: yItem?.value || [] // Provide a default empty array
      })) || [] // Provide a default empty array
  };

  // Log cleanChartData for debugging
  console.log('Cleaned Chart Data:', cleanChartData);

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
    yaxis: cleanChartData?.y?.map((yItem) => ({
      title: {
        text: yItem?.title
      }
    }))
  };

  const series = cleanChartData?.y?.map((yItem) => ({
    name: yItem?.title,
    data: yItem?.data
  }));

  // Log options and series for debugging
  console.log('Options:', options);
  console.log('Series:', series);

  return (
    <div>
      <h2>{cleanChartData?.title}</h2>
      <ApexCharts options={options} series={series} type={cleanChartData?.type} height={350} />
    </div>
  );
};

export default CustomChart;
