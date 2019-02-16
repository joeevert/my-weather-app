import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchCurrentWeather() {
  console.log('fetchCurrentWeather saga');
  try {
    const response = yield call(axios.get, '/api/owm');
    yield put( {type: 'SET_CURRENT_WEATHER', payload: response.data});
    console.log('response.data', response.data);
  }
  catch(error) {
    console.log('error', error);
  }
}

function* weatherSaga() {
  yield takeEvery( 'FETCH_CURRENT_WEATHER', fetchCurrentWeather);
}

export default weatherSaga;