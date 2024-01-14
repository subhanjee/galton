import React, { useState, useEffect } from 'react';
// material-ui
import { MenuItem, Select, Box, Grid, Stack, Typography } from '@mui/material';
import dashb from 'assets/images/dashb.png';
// project import
import MonthlyBarChart from './MonthlyBarChart';
import MainCard from 'components/MainCard';
// API exports
import {
  CreateValueShare,
  createValueShareAsstCheck,
  createValueShareAsstMessageList,
  createStackedChartAgent,
  createStackedChartAgentCheckStatus,
  createStackedChartAgentMessageList,
  createkpiAgent,
  createkpiAgentCheckStatus,
  createkpiMessageApi
} from 'services/apiServices';
import './index.js';
import Lottie from 'lottie-react';
import groovyWalkAnimation from './sub.json';

//category value Mn Sar
const months = [
  {
    month: 'Jan',
    value: '3.4'
  },
  {
    month: 'Feb',
    value: '3.4'
  },
  {
    month: 'Mar',
    value: '3.4'
  },
  {
    month: 'Apr',
    value: '3.4'
  },
  {
    month: 'May',
    value: '3.4'
  },
  {
    month: 'June',
    value: '3.4'
  },
  {
    month: 'July',
    value: '3.4'
  },
  {
    month: 'Aug',
    value: '3.4'
  },
  {
    month: 'Sep',
    value: '3.4'
  }
];

// avatar style
// const avatarSX = {
//   width: 36,
//   height: 36,
//   fontSize: '1rem'
// };

// action style
// const actionSX = {
//   mt: 0.75,
//   ml: 1,
//   top: 'auto',
//   right: 'auto',
//   alignSelf: 'flex-start',
//   transform: 'none'
// };

// // sales report status
// const status = [
//   {
//     value: 'today',
//     label: 'Today'
//   },
//   {
//     value: 'month',
//     label: 'This Month'
//   },
//   {
//     value: 'year',
//     label: 'This Year'
//   }
// ];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [Insight, setInsight] = useState('');
  const [chart, setchart] = useState('');
  const [kpi, setkpi] = useState([]);
  const [volume, setvolume] = useState([]);
  const [fileId, setFileID] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('Fetching data...');
  const [progress, setProgress] = useState('');
  const [inputData, setInputData] = useState('');
  const [outputData, setOutputData] = useState('');
  // const [slot] = useState('week');
  const [selectedCategory, setSelectedCategory] = useState('biscuits_and_cakes'); // or any other default category
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    console.log(newCategory);
    valShareAsst();
    kpiAsst();
    stackChartAgg();
  };

  const valShareAsst = async () => {
    try {
      // const categoryToUse = selectedCategory ? { category: selectedCategory } : { category: 'biscuits_and_cakes' };
      const first = await CreateValueShare({ category: selectedCategory });

      console.log(first, 'first VSA');

      const checkStatusUntilCompleted = async (first) => {
        let isCompleted = false;
        let status = '';
        let dataTwo = {};
        while (!isCompleted) {
          const second = await createValueShareAsstCheck({
            thread_id: first.thread_id,
            run_id: first.run_id
          });
          console.log(second, 'second VSA');
          status = second.retrive_status;
          setProgress(second.retrive_status);
          const inputData = second.run_status?.data?.[0]?.step_details?.tool_calls?.[0]?.code_interpreter?.input;
          const outputData = second.run_status?.data?.[0]?.step_details?.tool_calls?.[0]?.code_interpreter?.outputs?.[0]?.logs;

          setInputData(inputData);
          setOutputData(outputData);

          if (status == 'completed') {
            isCompleted = true;
            dataTwo = second.run_status;
          } else {
            // Optionally, you can introduce a delay before making the next check
            await new Promise((resolve) => setTimeout(resolve, 30000)); // Wait for 1 second (adjust as needed)
          }
        }
        console.log('Retrieval completed. Final status:', status);
        // Code to execute after completion of the loop
        const threadId = dataTwo.data?.[0].thread_id;
        const three = await createValueShareAsstMessageList({ thread_id: threadId });
        const file = three;
        setInsight(three.message_list?.data?.[0]?.content?.[0]?.text.value);
        setFileID(file);
        console.log(fileId, 'file hay');
        console.log(three, 'three VSA');
        stackChartAgg(file);
        setProgress(three.retrive_status);
      };

      // Invoke the checkStatusUntilCompleted function
      await checkStatusUntilCompleted(first);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const stackChartAgg = async (file) => {
    try {
      // const categoryToUse = selectedCategory ? { category: selectedCategory } : { category: 'biscuits_and_cakes' };
      // const idfile = { file_id: file.message_list.data[0].content[0].text.annotations[0].file_path?.file_id };

      const first = await createStackedChartAgent({
        category: selectedCategory,
        file_id: file.message_list.data[0].content[0].text.annotations[0].file_path?.file_id
      });
      console.log(first, 'first SCA');

      const checkStatusUntilCompleted = async (first) => {
        let isCompleted = false;
        let status = '';
        let dataTwo = {};

        while (!isCompleted) {
          const second = await createStackedChartAgentCheckStatus({
            thread_id: first.thread_id,
            run_id: first.run_id
          });
          console.log(second, 'second SCA');
          status = second.retrive_status;
          setProgress(second.retrive_status);
          const inputData = second.run_status?.data?.[0]?.step_details?.tool_calls?.[0]?.code_interpreter?.input;
          const outputData = second.run_status?.data?.[0]?.step_details?.tool_calls?.[0]?.code_interpreter?.outputs?.[0]?.logs;

          setInputData(inputData);
          setOutputData(outputData);

          if (status === 'completed') {
            isCompleted = true;
            dataTwo = second.run_status;
          } else {
            await new Promise((resolve) => setTimeout(resolve, 30000)); // Wait for 30 seconds
          }
        }

        console.log('Retrieval completed. Final status:', status);

        const threadId = dataTwo.data?.[0].thread_id;
        const three = await createStackedChartAgentMessageList({
          thread_id: threadId,
          file_id: file.message_list.data[0].content[0].text.annotations[0].file_path?.file_id
        });
        console.log(three, 'three SCA');
        setProgress(three.retrive_status);

        const rawData = three.message_list.data?.[0]?.content?.[0]?.text.value;
        const cleanedData = rawData.replace(/^```json\s+|\s+```$/g, '');
        console.log('Cleaned Data:', cleanedData);

        try {
          const parsedData = JSON.parse(cleanedData);

          if (parsedData && parsedData.series) {
            const seriesData = parsedData.series;
            console.log(seriesData); // Array of objects containing series data
            setchart(seriesData);
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      };

      await checkStatusUntilCompleted(first);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const kpiAsst = async () => {
    try {
      // const categoryToUse = selectedCategory ? { category: selectedCategory } : { category: 'biscuits_and_cakes' };
      const first = await createkpiAgent({ category: selectedCategory });
      console.log(first, 'first KPI');

      const checkStatusUntilCompleted = async (first) => {
        let isCompleted = false;
        let status = '';
        let dataTwo = {};

        while (!isCompleted) {
          const second = await createkpiAgentCheckStatus({
            thread_id: first.thread_id,
            run_id: first.run_id
          });
          console.log(second, 'second KPI');
          status = second.retrive_status;
          setProgress(second.retrive_status);
          const inputData = second.run_status?.data?.[0]?.step_details?.tool_calls?.[0]?.code_interpreter?.input;
          const outputData = second.run_status?.data?.[0]?.step_details?.tool_calls?.[0]?.code_interpreter?.outputs?.[0]?.logs;

          setInputData(inputData);
          setOutputData(outputData);

          if (status == 'completed') {
            isCompleted = true;
            dataTwo = second.run_status;
          } else {
            // Optionally, you can introduce a delay before making the next check
            await new Promise((resolve) => setTimeout(resolve, 30000)); // Wait for 1 second (adjust as needed)
          }
        }

        console.log('Retrieval completed. Final status:', status);

        // Code to execute after completion of the loop
        const threadId = dataTwo.data?.[0].thread_id;
        const three = await createkpiMessageApi({ thread_id: threadId });
        console.log(three, 'three KPI');
        setProgress(three.retrive_status);

        const data = three.message_list?.data?.[0]?.content?.[0]?.text.value;
        const parseData = (data) => {
          const regex = /Value Sales:{(.*?)},\s*Volume:{(.*?)}/s;
          const match = data.match(regex);

          if (match && match.length === 3) {
            const valueSales = match[1].split(',').map((value) => parseFloat(value.trim()));
            const volume = match[2].split(',').map((value) => parseFloat(value.trim()));

            return { valueSales, volume };
          }

          return { valueSales: [], volume: [] };
        };

        // Then, you can use parseData function and get separated data
        const { valueSales, volume } = parseData(data);
        console.log(valueSales, volume, 'DATA HAY BHAI');
        setkpi(valueSales);
        setvolume(volume);
      };

      // Invoke the checkStatusUntilCompleted function
      await checkStatusUntilCompleted(first);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingMessage('Fetching Value Share data...');
        await valShareAsst();

        setLoadingMessage('Fetching KPI data...');
        await kpiAsst();

        setLoadingMessage('Fetching Stacked Chart data...');
        await stackChartAgg();

        setLoadingMessage('');
      } catch (error) {
        console.error('Error occurred:', error);
        setLoadingMessage('Error occurred while fetching data.');
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      {loadingMessage && (
        // Show a background layer or loading indicator while waiting for API calls
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0, 0, 0.5)',
            // opacity: 0.5,
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Lottie animationData={groovyWalkAnimation} loop={true} />
          </div>
          <div
            style={{
              textAlign: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              animation: 'typingAnimation 4s steps(14, end) infinite', // Added "infinite" to make the animation continuous
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            <div>
              <Typography variant="h4">{progress}</Typography>
              <Typography variant="h2">{loadingMessage}</Typography>
              <div
                style={{
                  textAlign: 'center',
                  width: '50rem'
                }}
              >
                <Typography variant="h4">{inputData}</Typography>
                <Typography variant="h4">{outputData}</Typography>
              </div>
            </div>
          </div>
        </div>
      )}

      <>
        <Grid item xs={12} md={4} lg={8}>
          <div
            style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #CECECE', borderRadius: '1rem', padding: '1.2rem' }}
          >
            <p style={{ fontSize: '2rem' }}>{`${selectedCategory} `}</p>
            <p style={{ fontSize: '1rem', fontWeight: '700' }}>KPIs</p>
            <div style={{ background: '#EDFAFF', border: '1px solid #CECECE', borderRadius: '8px', padding: '1rem' }}>
              <h3>Category Value Mn SAR</h3>
              <div style={{ display: 'flex', gap: '1.8rem' }}>
                {months.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                    <p>{item.month}</p>
                    {/* <div style={{ width: '.1rem', height: '2.5rem', backgroundColor: '#D4D4D4' }}></div> */}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {kpi?.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ fontWeight: '600' }}>{String(item).slice(0, 4)}</p>
                    <div style={{ width: '.1rem', height: '2.5rem', backgroundColor: '#D4D4D4' }}></div>
                  </div>
                ))}
              </div>
              {/* </div> */}
            </div>
            <div style={{ marginTop: '1rem', background: '#FCFFD6', border: '1px solid #CECECE', borderRadius: '8px', padding: '1rem' }}>
              <h3>Category Volume in Tons</h3>
              <div style={{ display: 'flex', gap: '2.2rem' }}>
                {months.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                    <p>{item.month}</p>
                    {/* <div style={{ width: '.1rem', height: '2.5rem', backgroundColor: '#D4D4D4' }}></div> */}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {volume?.map((item, index) => (
                  <>
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                      <p style={{ fontWeight: '600' }}>{String(item).slice(0, 4)}</p>
                      <div style={{ width: '.1rem', height: '2.5rem', backgroundColor: '#D4D4D4' }}></div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <br />
                <Typography variant="h5">Income Overview</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
              <Box sx={{ p: 3, pb: 0 }}>
                <Stack spacing={2}>
                  <Typography variant="h6" color="textSecondary">
                    This Week Statistics
                  </Typography>
                  <Typography variant="h3">$7,650</Typography>
                </Stack>
              </Box>
              {chart && <MonthlyBarChart data={chart} />}
            </MainCard>
          </div>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>{/* <Typography variant="h5">Analytics Report</Typography> */}</Grid>
            <Grid item />
          </Grid>
          <MainCard style={{ padding: '1rem', width: '23rem', borderRadius: '1rem' }} content={false}>
            <div>
              <h3>Choose Category</h3>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                style={{ width: '320px' }} // Adjust the width as needed
              >
                <MenuItem value="biscuits_and_cakes">Biscuits & Cakes (&lt;75G)</MenuItem>
                <MenuItem value="chocolate">Chocolate </MenuItem>
                <MenuItem value="candy">Candy</MenuItem>
                <MenuItem value="powdered_bevarage">Powdered Beverage</MenuItem>
                <MenuItem value="grocery">Grocery</MenuItem>
              </Select>
            </div>
          </MainCard>
          <MainCard sx={{ mt: 2 }} style={{ padding: '1rem', width: '23rem', height: '50rem', borderRadius: '1rem' }} content={false}>
            <div>
              <h2>Insights</h2>
              <h4>{Insight}</h4>
              <img src={dashb} alt="Mantis" style={{ width: '20rem', opacity: 0.1, height: '538px', marginTop: '10rem', left: '928px' }} />
            </div>
          </MainCard>
        </Grid>

        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      </>
    </Grid>
  );
};

export default DashboardDefault;
