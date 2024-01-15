// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import authReducer from './login';
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: {
    // include other reducers if any
    auth: authReducer.auth // assuming 'auth' is the key used in the combineReducers in reducers.js
  }
});

const { dispatch } = store;

export { store, dispatch };
