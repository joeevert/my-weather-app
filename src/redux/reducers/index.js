import { combineReducers } from 'redux';
import currentWeather from './currentWeatherReducer';
import searchLocation from './searchLocationReducer';

const rootReducer = combineReducers({
  currentWeather,
  searchLocation
});

export default rootReducer;