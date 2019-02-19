import { all } from 'redux-saga/effects';
import currentWeatherSaga from './currentWeatherSaga';
import searchSaga from './searchLocationSaga';

export default function* rootSaga() {
  yield all([
    currentWeatherSaga(),
    searchSaga(),
  ]);
}