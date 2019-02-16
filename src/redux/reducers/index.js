import { combineReducers } from 'redux';
import currentWeather from './currentWeatherReducer';

const rootReducer = combineReducers({
  currentWeather,
});

export default rootReducer;