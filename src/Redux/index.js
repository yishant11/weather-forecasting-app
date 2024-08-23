import { combineReducers } from 'redux';
import data from './reducers/data';

const rootReducer = combineReducers({
  data: data,
});

export default rootReducer;