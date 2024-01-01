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
    categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
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

const MonthlyBarChart = () => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series] = useState([
    {
      name: "BEST OF OUR MINIS MIX 500G",
      data: [817408.0, 254090.95, 217050.2, 604962.0, 411829.02, 689941.83, 581660.71, 502162.86]
    },
    {
      name: "BEST OF OUR MINIS MIX 710G",
      data: [391639.0, 574355.85, 376026.88, 772018.2, 383322.38, 569015.09, 425699.86, 407500.34]
    },
    {
      name: "GALAXY J.CHCO ASRTD.900G 10%OF",
      data: [83.0, 110314.8, 515041.1, 4492276.28, 136257.3, 2414869.93, 183447.74, 16318.23]
    },
    {
      name: "GALAXY JEWELS CHOC 650G SO",
      data: [61.0, 64943.35, 412882.23, 3132967.4, 211423.49, 1721032.21, 255247.91, 103929.09]
    },
    {
      name: "M&M'S MINIS CHOCOLATE 30.6G",
      data: [428589.0, 375989.38, 427610.5, 278288.42, 254863.75, 369706.03, 324304.48, 376045.71]
    },
    {
      name: "OREO ORIGINAL BISCITS 38G",
      data: [1251632.0, 946296.19, 1514739.44, 1247045.26, 672154.3, 58402.49, 6465.73, 3675.41]
    },
    {
      name: "ULKER BISKREM COCO.BSCUT 36G",
      data: [316474.0, 227745.91, 250913.91, 185063.9, 327603.5, 282969.31, 305156.56, 431168.19]
    },
    {
      name: "ULKER COKOSANDVIC #77-4 22.5G",
      data: [322220.0, 302959.5, 296902.03, 231585.13, 363394.94, 340241.54, 268988.69, 447037.8]
    },
    {
      name: "ULKER TEABISCUIT 147G",
      data: [489231.0, 458658.3, 1462277.8, 424144.91, 385323.66, 362183.82, 366114.9, 387401.59]
    },
    {
      name: "ULKER TEABISCUITS 70G",
      data: [705402.0, 685035.88, 1609290.69, 576122.13, 519192.3, 515532.01, 627853.8, 625351.68]
    }
  ]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [info],
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
