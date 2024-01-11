// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import login from '../../storeOne/login';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, login });

export default reducers;
