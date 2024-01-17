// material-ui
import { Typography, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
// project import
import MainCard from 'components/MainCard';
import CustomChart from '../ask-element//CustomChart';
import Digger from '../ask-element/Digger';
import Insight from '../ask-element/Insight';
import { createCallChartify, createCallDigger, createCallInsightor, createThread } from 'services/apiServices';
import './index.css';
import Lottie from 'lottie-react';
import groovyWalkAnimation from './sub.json';
// import IncomeAreaChart from './IncomeAreaChart';

// ==============================|| SAMPLE PAGE ||============================== //

const Ask = () => {
  const [showApiSection, setShowApiSection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryString, setQueryString] = useState('');
  const [callDigger, setCallDigger] = useState('');
  const [callcharity, setCallcharity] = useState('');
  const [callInsightor, setCallInsightor] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const Thread = async () => {
    setLoading(true);
    setLoadingMessage('Manager Agent Analysing the query');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Manager agent figuring out the quests for the team');
    const first = await createThread({ query: queryString });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Manager Agent communicating with the team');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(first);
    callDig(first);
  };

  const callDig = async (createThread) => {
    setLoadingMessage('Analyser Agent received the query. ');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Analyser Agent listing down required parameters');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Analyser Agent using python to query the data');
    const secound = await createCallDigger({ manager_response: createThread.manager_response });
    setCurrentStep(1);
    console.log(secound.response);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Analyser Agent pulling out relevant details');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCallDigger(secound.response);
    callChartify(createThread);
  };

  const callChartify = async (createThread) => {
    setLoadingMessage('Visualiser Agent received the query.');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Visualiser Agent listing down required parameters');
    const charityResponse = await createCallChartify({ manager_response: createThread.manager_response });
    const cleanedData = charityResponse.chart.replace(/^```json\s+|\s+```$/g, '');
    console.log(cleanedData);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Visualiser Agent using relevant details and creating a chart');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCallcharity(cleanedData);
    setCurrentStep(2);
    callInsight(createThread);
  };

  const callInsight = async (createThread) => {
    setLoadingMessage('Insight Agent Figuring out a relevant insight');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Insight Agent using python to query the data');
    const insightorResponse = await createCallInsightor({ manager_response: createThread.manager_response });
    setCurrentStep(3);
    console.log(insightorResponse);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoadingMessage('Insight Agent pulling out relevant details and adding comment');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCallInsightor(insightorResponse.insight);
    setLoading(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      Thread();
      setLoading(true);
    }
  };
  return (
    <div>
      {loading ? (
        // Loader layer covering the entire page
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)', // Adjust the background color and opacity as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 9999 // Ensure it appears above other elements
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
              <Typography variant="h3" sx={{ mt: 2 }}>
                {loadingMessage}
              </Typography>
            </div>
          </div>
        </div>
      ) : null}
      {showApiSection ? (
        // New section to display API response
        <>
          <Typography variant="h3" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            {queryString}
          </Typography>
          {/* Display the three sections using the results from the API calls */}
          <div
            role="button"
            tabIndex={0}
            onKeyPress={handleKeyPress}
            style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #CECECE', borderRadius: '1rem', padding: '1.2rem' }}
          >
            <>
              {currentStep >= 1 && (
                <div>
                  <Typography variant="h3">Digger Response</Typography>
                  <MainCard content={callDigger} sx={{ mt: 1.5 }} style={{ padding: '20px', marginBottom: '1rem' }}>
                    <Digger callDigger={callDigger} />
                  </MainCard>
                </div>
              )}
              {currentStep >= 2 && (
                <div>
                  <Typography variant="h3">Month to Month Sales Variation By Category</Typography>
                  <MainCard content={callcharity} sx={{ mt: 1.5 }} style={{ padding: '20px', marginBottom: '1rem' }}>
                    <CustomChart data={callcharity} />
                  </MainCard>
                </div>
              )}
              {currentStep >= 3 && (
                <div>
                  <Typography variant="h3">Insight Response</Typography>
                  <MainCard content={callInsightor} sx={{ mt: 1.5 }} style={{ padding: '20px', marginBottom: '1rem' }}>
                    <Insight callInsightor={callInsightor} />
                  </MainCard>
                </div>
              )}
            </>
          </div>
        </>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Ask;
