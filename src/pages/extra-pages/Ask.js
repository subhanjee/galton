// material-ui
import { Typography, Grid, TextField, Button, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
// project import
import MainCard from 'components/MainCard';
import CustomChart from '../ask-element//CustomChart';
import Digger from '../ask-element/Digger';
import Insight from '../ask-element/Insight';

// import IncomeAreaChart from './IncomeAreaChart';

// ==============================|| SAMPLE PAGE ||============================== //

const Ask = () => {
  // State to manage API response and toggle between sections
  // const [apiResponse, setApiResponse] = useState(null);
  const [diggerResponse, setdiggerResponse] = useState(null);
  const [chartResponse, setchartResponse] = useState(null);
  const [insightResponse, setinsightResponse] = useState(null);
  const [showApiSection, setShowApiSection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryString, setQueryString] = useState('');

  // Inside the component function
  // Function to call the API
  const callApi = async () => {
    try {
      setLoading(true);
      const createThreadResponse = await fetch('http://127.0.0.1:8000/create_thread', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: queryString }) // Replace 'text' with the actual parameter name
      });

      const createThreadData = await createThreadResponse.json();
      // setApiResponse(data);

      const diggerCall = await fetch('http://127.0.0.1:8000/call_digger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ manager_response: createThreadData['manager_response'] }) // Replace 'text' with the actual parameter name
      });
      setLoading(false);
      const diggerData = await diggerCall.json();
      setdiggerResponse(diggerData);

      const chartifyCall = await fetch('http://127.0.0.1:8000/call_chartify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ manager_response: createThreadData['manager_response'] }) // Replace 'text' with the actual parameter name
      });

      const chartifyData = await chartifyCall.json();
      if (chartifyData.status == 'success' && 'chart' in chartifyData) {
        var chartData = JSON.parse(chartifyData.chart);
        chartifyData.chart = chartData;
      }
      setchartResponse(chartifyData);

      const callInsighter = await fetch('http://127.0.0.1:8000/call_insightor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ manager_response: createThreadData['manager_response'] }) // Replace 'text' with the actual parameter name
      });

      const insighterData = await callInsighter.json();
      setinsightResponse(insighterData);
    } catch (error) {
      console.error('Error fetching API:', error);
      // Handle error if needed
    } finally {
      setLoading(false); // Set loading to false when API call is completed (success or failure)
      setShowApiSection(true); // Show the API response section
    }
  };

  // useEffect to call the API when the component mounts
  useEffect(() => {
    console.log('useEffect triggered');
    if (showApiSection) {
      callApi();
    }
  }, [showApiSection]);

  return (
    <>
      {loading ? (
        // Loader while waiting for API response
        <CircularProgress />
      ) : showApiSection ? (
        // New section to display API response
        <>
          {/* Display the three sections using the results from the API calls */}
          <Typography variant="h1">Section 1</Typography>
          <MainCard content={diggerResponse} sx={{ mt: 1.5 }} style={{ padding: '20px' }}>
            {diggerResponse && <Digger apiResponse={diggerResponse} />}
          </MainCard>

          <Typography variant="h1">Section 2</Typography>
          {chartResponse && <CustomChart chartData={chartResponse} />}

          <Typography variant="h1">Section 3</Typography>
          <MainCard content={insightResponse} sx={{ mt: 1.5 }} style={{ padding: '20px' }}>
            {insightResponse && <Insight apiResponse={insightResponse} />}
          </MainCard>
        </>
      ) : (
        <>
          <Typography variant="h1">Query Suggestions</Typography>
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
          <Button
            variant="contained"
            className="btn-black"
            onClick={() => {
              console.log('Button clicked');
              setShowApiSection(true);
              console.log('showApiSection after click:', showApiSection);
            }}
          >
            Submit
          </Button>
        </>
      )}
    </>
  );
};

export default Ask;
