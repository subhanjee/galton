// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    isAuthenticated: false,
    successMessage: ''
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      state.successMessage = action.payload ? 'Login successful!' : '';
    }
  }
});

export const { setEmail, setPassword, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
