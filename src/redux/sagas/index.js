import { all } from 'redux-saga/effects';
import currentWeatherSaga from './currentWeatherSaga';
import searchSaga from './searchLocationSaga';
import favoritesSaga from './favoritesSaga';

export default function* rootSaga() {
  yield all([
    currentWeatherSaga(),
    searchSaga(),
    favoritesSaga()
  ]);
}