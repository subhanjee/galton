const API_BASE_URL = process.env.REACT_APP_GALTON_API_BASE_URL;

export const getItems = async (item_id) => {
  const response = await fetch(`${API_BASE_URL}/items/${item_id}`);
  const data = await response.json();
  return data;
};

export const createThread = async () => {
  const response = await fetch(`${API_BASE_URL}/create_thread`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};

export const CreateValueShare = async (user) => {
  const response = await fetch(`${API_BASE_URL}/value_share_asst`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};

export const createValueShareAsstCheck = async () => {
  const response = await fetch(`${API_BASE_URL}/value_share_asst_check_status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createValueShareAsstMessageList = async () => {
  const response = await fetch(`${API_BASE_URL}/value_share_asst_message_list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createCallDigger = async () => {
  const response = await fetch(`${API_BASE_URL}/call_digger`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createCallChartify = async () => {
  const response = await fetch(`${API_BASE_URL}/call_chartify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createCallInsightor = async () => {
  const response = await fetch(`${API_BASE_URL}/call_insightor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createChartThread = async () => {
  const response = await fetch(`${API_BASE_URL}/create_chart_thread`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createChartThreadStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/check_chart_thread_status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createMessageList = async () => {
  const response = await fetch(`${API_BASE_URL}/messageList/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createStackedChartAgent = async () => {
  const response = await fetch(`${API_BASE_URL}/stacked_chart_agent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createStackedChartAgentCheckStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/stacked_chart_agent_check_status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createStackedChartAgentMessageList = async () => {
  const response = await fetch(`${API_BASE_URL}/stacked_chart_agent_message_list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createkpiAgent = async () => {
  const response = await fetch(`${API_BASE_URL}/kpi_agent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createkpiAgentCheckStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/kpi_agent_check_status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createkpiMessageApi = async () => {
  const response = await fetch(`${API_BASE_URL}/kpi_message_list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
export const createDeleteThread = async () => {
  const response = await fetch(`${API_BASE_URL}/deleteThread`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  const data = await response.json();
  return data;
};
