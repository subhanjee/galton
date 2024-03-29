// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';
import authReducer from './reducers/login';
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers,
  auth: authReducer
});

const { dispatch } = store;

export { store, dispatch };
