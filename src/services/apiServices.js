const API_BASE_URL = process.env.REACT_APP_GALTON_API_BASE_URL;

export const getItems = async (item_id) => {
  const response = await fetch(`${API_BASE_URL}/items/${item_id}`);
  const data = await response.json();
  return data;
};

export const createThread = async (user) => {
  const response = await fetch(`${API_BASE_URL}/create_thread`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
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
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
};

export const createValueShareAsstCheck = async (user) => {
  const response = await fetch(`${API_BASE_URL}/value_share_asst_check_status`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
};
export const createValueShareAsstMessageList = async (user) => {
  const response = await fetch(`${API_BASE_URL}/value_share_asst_message_list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
};
