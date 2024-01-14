import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '75%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: true
  },
  grid: {
    show: false
  }
};

// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart = ({ data }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const mappedSeries = data.map((item) => ({
        name: item.name,
        data: item.data // Assuming each item in 'data' has a 'values' array
      }));
      setSeries(mappedSeries);
    }
  }, [data]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [info, '#00bcd4', '#4caf50', '#ff9800', '#e91e63'], // Add more colors as needed
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      tooltip: {
        theme: 'light'
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, info, secondary]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={365} />
    </div>
  );
};

export default MonthlyBarChart;
