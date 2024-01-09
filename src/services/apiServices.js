const API_BASE_URL = process.env.REACT_APP_GALTON_API_BASE_URL;

export const getItems = async (item_id) => {
  const response = await fetch(`${API_BASE_URL}/items/${item_id}`);
  const data = await response.json();
  return data;
};

export const createThread = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create_thread`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createThread failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};

// export const createValueShareAsstMessageList = async () => {
//   const response = await fetch(`${API_BASE_URL}/value_share_asst_message_list`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createCallDigger = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/call_digger`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createCallDigger failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createCallDigger = async () => {
//   const response = await fetch(`${API_BASE_URL}/call_digger`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createCallChartify = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/call_chartify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createCallChartify failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};

// export const createCallChartify = async () => {
//   const response = await fetch(`${API_BASE_URL}/call_chartify`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createCallInsightor = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/call_insightor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createCallInsightor failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};

// export const createCallInsightor = async () => {
//   const response = await fetch(`${API_BASE_URL}/call_insightor`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createChartThread = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create_chart_thread`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createChartThread failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createThread = async () => {
//   const response = await fetch(`${API_BASE_URL}/create_thread`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };

// Update CreateValueShare function to accept parameters
export const CreateValueShare = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/value_share_asst`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`CreateValueShare failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
export const createValueShareAsstCheck = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/value_share_asst_check_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createValueShareAsstCheck failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createValueShareAsstCheck = async () => {
//   const response = await fetch(`${API_BASE_URL}/value_share_asst_check_status`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createValueShareAsstMessageList = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/value_share_asst_message_list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createValueShareAsstMessageList failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createChartThread = async () => {
//   const response = await fetch(`${API_BASE_URL}/create_chart_thread`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createChartThreadStatus = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/check_chart_thread_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createChartThreadStatus failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createChartThreadStatus = async () => {
//   const response = await fetch(`${API_BASE_URL}/check_chart_thread_status`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createMessageList = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/messageList/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createMessageList failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createMessageList = async () => {
//   const response = await fetch(`${API_BASE_URL}/messageList/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createStackedChartAgent = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stacked_chart_agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      try {
        const errorText = await response.text(); // Try to parse the response body as text
        const errorJson = JSON.parse(errorText); // Attempt to parse the text as JSON

        // If parsing succeeds, log the JSON error response
        console.error('Error response JSON:', errorJson);
        throw new Error(`createStackedChartAgent failed with status ${response.status}. Response: ${errorJson.message}`);
      } catch (jsonParseError) {
        // If parsing fails, log the plain text error response
        console.error('Error response text:', errorText);
        throw new Error(`createStackedChartAgent failed with status ${response.status}. Response: ${errorText}`);
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};

// export const createStackedChartAgent = async () => {
//   const response = await fetch(`${API_BASE_URL}/stacked_chart_agent`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createStackedChartAgentCheckStatus = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stacked_chart_agent_check_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createStackedChartAgentCheckStatus failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createStackedChartAgentCheckStatus = async () => {
//   const response = await fetch(`${API_BASE_URL}/stacked_chart_agent_check_status`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createStackedChartAgentMessageList = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stacked_chart_agent_message_list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createStackedChartAgentMessageList failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createStackedChartAgentMessageList = async () => {
//   const response = await fetch(`${API_BASE_URL}/stacked_chart_agent_message_list`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createkpiAgent = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/kpi_agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createkpiAgent failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createkpiAgent = async () => {
//   const response = await fetch(`${API_BASE_URL}/kpi_agent`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createkpiAgentCheckStatus = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/kpi_agent_check_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createkpiAgentCheckStatus failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};

// export const createkpiAgentCheckStatus = async () => {
//   const response = await fetch(`${API_BASE_URL}/kpi_agent_check_status`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createkpiMessageApi = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/kpi_message_list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createkpiMessageApi failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createkpiMessageApi = async () => {
//   const response = await fetch(`${API_BASE_URL}/kpi_message_list`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
export const createDeleteThread = async (params) => {
  try {
    const response = await fetch(`${API_BASE_URL}/deleteThread`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params) // Send the provided parameters in the request body
    });

    if (!response.ok) {
      throw new Error(`createDeleteThread failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error('Error occurred:', error);
    throw error; // Rethrow the error to be caught by the calling function if needed
  }
};
// export const createDeleteThread = async () => {
//   const response = await fetch(`${API_BASE_URL}/deleteThread`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   });
//   const data = await response.json();
//   return data;
// };
