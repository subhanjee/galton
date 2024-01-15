// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
    isAuthenticated: false,
    successMessage: '',
    errorMessage: '' // Add the error message field
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
      state.errorMessage = action.payload ? '' : 'Invalid email or password'; // Set error message
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    }
  }
});

export const { setEmail, setPassword, setAuthenticated, setErrorMessage } = authSlice.actions;
export default authSlice.reducer;
