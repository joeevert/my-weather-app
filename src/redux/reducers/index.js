import { combineReducers } from 'redux';
import currentWeather from './currentWeatherReducer';
import searchLocation from './searchLocationReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  currentWeather,
  searchLocation,
  favorites
});

export default rootReducer;