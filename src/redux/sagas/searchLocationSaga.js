import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* searchLocation(action) {
  console.log('searchLocation saga', action.payload);
  try {
    const search = action.payload;
    const response = yield call(axios.post, '/api/search', search);
    yield put( {type: 'SET_CURRENT_WEATHER', payload: response.data});
    console.log('response.data', response.data);
  }
  catch(error) {
    console.log('error', error);
  }
}

function* searchSaga() {
  yield takeEvery( 'FETCH_SEARCH_RESULTS', searchLocation);
}

export default searchSaga;