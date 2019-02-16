import { all } from 'redux-saga/effects';
import currentWeatherSaga from './currentWeatherSaga';

export default function* rootSaga() {
  yield all([
    currentWeatherSaga(),
    
  ]);
}