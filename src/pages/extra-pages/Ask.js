// material-ui
import { Typography, Grid, TextField, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
// project import
import MainCard from 'components/MainCard';
import CustomChart from '../ask-element//CustomChart';
import Digger from '../ask-element/Digger';
import Insight from '../ask-element/Insight';
import { createCallChartify, createCallDigger, createCallInsightor, createThread } from 'services/apiServices';
import './index.css';
// import IncomeAreaChart from './IncomeAreaChart';

// ==============================|| SAMPLE PAGE ||============================== //

const Ask = () => {
  // State to manage API response and toggle between sections
  // const [apiResponse, setApiResponse] = useState(null);
  // const [diggerResponse, setdiggerResponse] = useState(null);
  // const [chartResponse, setchartResponse] = useState(null);
  // const [insightResponse, setinsightResponse] = useState(null);
  const [showApiSection, setShowApiSection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryString, setQueryString] = useState('');
  const [callDigger, setCallDigger] = useState('');
  const [callcharity, setCallcharity] = useState('');
  const [callInsightor, setCallInsightor] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');

  // Inside the component function
  // Function to call the API
  // const callApi = async () => {
  //   try {
  //     setLoading(true);
  //     const createThreadResponse = await fetch('http://127.0.0.1:8000/create_thread', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ query: queryString }) // Replace 'text' with the actual parameter name
  //     });

  //     const createThreadData = await createThreadResponse.json();
  //     // setApiResponse(data);

  //     const diggerCall = await fetch('http://127.0.0.1:8000/call_digger', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ manager_response: createThreadData['manager_response'] }) // Replace 'text' with the actual parameter name
  //     });
  //     setLoading(false);
  //     const diggerData = await diggerCall.json();
  //     setdiggerResponse(diggerData);

  //     const chartifyCall = await fetch('http://127.0.0.1:8000/call_chartify', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ manager_response: createThreadData['manager_response'] }) // Replace 'text' with the actual parameter name
  //     });

  //     const chartifyData = await chartifyCall.json();
  //     if (chartifyData.status == 'success' && 'chart' in chartifyData) {
  //       var chartData = JSON.parse(chartifyData.chart);
  //       chartifyData.chart = chartData;
  //     }
  //     setchartResponse(chartifyData);

  //     const callInsighter = await fetch('http://127.0.0.1:8000/call_insightor', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ manager_response: createThreadData['manager_response'] }) // Replace 'text' with the actual parameter name
  //     });

  //     const insighterData = await callInsighter.json();
  //     setinsightResponse(insighterData);
  //   } catch (error) {
  //     console.error('Error fetching API:', error);
  //     // Handle error if needed
  //   } finally {
  //     setLoading(false); // Set loading to false when API call is completed (success or failure)
  //     setShowApiSection(true); // Show the API response section
  //   }
  // };
  const Thread = async () => {
    try {
      // First, make the createThread API call
      setLoading(true);
      // Step 1: Display "Please wait, creating thread..."
      setLoadingMessage('Please wait, creating thread...');
      const first = await createThread({
        query: queryString
      });

      console.log(first, 'thread');

      // Now, make the createCallDigger API call
      // Step 2: Display "Please wait, calling Digger..."
      setLoadingMessage('Please wait, calling Digger...');
      const calldraggerResponse = await createCallDigger({
        manager_response: first?.manager_response
      });
      setCallDigger(calldraggerResponse.response);
      console.log(calldraggerResponse, 'calldraggerResponse');
      // Add the new API call - callcharity
      // Step 3: Display "Please wait, calling Chartify..."
      setLoadingMessage('Please wait, calling Chartify...');
      const charityResponse = await createCallChartify({
        manager_response: first?.manager_response
      });
      console.log(charityResponse, 'charityResponse');
      const cleanedData = charityResponse.chart.replace(/^```json\s+|\s+```$/g, '');
      console.log('Cleaned Data:', cleanedData);
      setCallcharity(cleanedData);

      // Add the new API call - callinsightor
      // Step 4: Display "Please wait, calling Insightor..."
      setLoadingMessage('Please wait, calling Insightor...');
      const insightorResponse = await createCallInsightor({
        manager_response: first?.manager_response
      });
      setCallInsightor(insightorResponse.insight);
      console.log(insightorResponse, 'insightorResponse');

      // Step 5: Display "Loading completed. Data is ready."
      setLoadingMessage('Loading completed. Data is ready.');
      // Code to execute after completion of all API calls
      setLoading(false);

      // Invoke the checkStatusUntilCompleted function
    } catch (error) {
      // Handle errors as needed
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error making the request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error during request setup:', error.message);
      }
      setLoading(false);
    }
  };

  // useEffect to call the API when the component mounts
  // useEffect(() => {
  //   console.log('useEffect triggered');
  //   if (showApiSection) {
  //     callApi();
  //   }
  // }, [showApiSection]);
  // useEffect(() => {
  //   Thread();
  //   // CallDigger();
  // }, []);
  return (
    <>
      {loading ? (
        // Loader while waiting for API response
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <CircularProgress style={{ fontSize: '3rem' }} />

          <Typography variant="h3" sx={{ mt: 2 }}>
            {loadingMessage}
          </Typography>
        </div>
      ) : showApiSection ? (
        // New section to display API response
        <>
          {/* Display the three sections using the results from the API calls */}
          <div
            style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #CECECE', borderRadius: '1rem', padding: '1.2rem' }}
          >
            <Typography variant="h3">Response</Typography>
            <MainCard content={callDigger} sx={{ mt: 1.5 }} style={{ padding: '20px', marginBottom: '1rem' }}>
              <Digger callDigger={callDigger} />
            </MainCard>

            <Typography variant="h3">Month to Month Sales Variation By Category</Typography>
            <MainCard content={callcharity} sx={{ mt: 1.5 }} style={{ padding: '20px', marginBottom: '1rem' }}>
              <CustomChart data={callcharity} />
            </MainCard>
            <Typography variant="h3">Insight</Typography>
            <MainCard content={callInsightor} sx={{ mt: 1.5 }} style={{ padding: '20px', marginBottom: '1rem' }}>
              <Insight callInsightor={callInsightor} />
            </MainCard>
          </div>
        </>
      ) : (
        <>
          <Typography variant="h3">Query Suggestions</Typography>
          <Grid container spacing={2} sx={{ mt: 1.5 }}>
            <Grid item xs={6}>
              <MainCard content={false} sx={{ mt: 1.5 }} style={{ padding: '20px' }}>
                <Typography variant="h5">
                  If we have data by store location or region, how do sales compare across different geographical areas?
                </Typography>
              </MainCard>
            </Grid>
            <Grid item xs={6}>
              <MainCard content={false} sx={{ mt: 1.5 }} style={{ padding: '20px' }}>
                <Typography variant="h5">
                  If we have data by store location or region, how do sales compare across different geographical areas?
                </Typography>
              </MainCard>
            </Grid>
            <Grid item xs={6}>
              <MainCard content={false} sx={{ mt: 1.5 }} style={{ padding: '20px' }}>
                <Typography variant="h5">
                  If we have data by store location or region, how do sales compare across different geographical areas?
                </Typography>
              </MainCard>
            </Grid>
            <Grid item xs={6}>
              <MainCard content={false} sx={{ mt: 1.5 }} style={{ padding: '20px' }}>
                <Typography variant="h5">
                  If we have data by store location or region, how do sales compare across different geographical areas?
                </Typography>
              </MainCard>
            </Grid>
          </Grid>
          <h2>Ask your own question</h2>
          <TextField
            label="Enter your query"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }} // Add some margin at the top
            value={queryString}
            onChange={(e) => setQueryString(e.target.value)}
          />
          <button
            // variant="contained"
            className="btn-black"
            onClick={() => {
              console.log('Button clicked');
              // Check if queryString is not empty before making the API call
              if (queryString.trim() !== '') {
                Thread(); // Call the Thread API
                setShowApiSection(true);
              } else {
                console.log('Query string is empty. Please enter a query.');
              }
            }}
          >
            Submit
          </button>
        </>
      )}
    </>
  );
};

export default Ask;
