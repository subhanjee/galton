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

export const updateBid = async (id, user) => {
  const response = await fetch(`${API_BASE_URL}/api/Bid/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
};

export const deleteBid = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/Bid/${id}`, {
    method: 'DELETE'
  });
  return response.ok;
};
