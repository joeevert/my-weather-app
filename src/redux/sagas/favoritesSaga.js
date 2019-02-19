import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

function* addFavorite(action) {
  try {
    const favorite = action.payload;
    console.log('favorite', favorite);
    yield call(axios.post, '/api/favorites', favorite);
    yield put({ type: 'FETCH_FAVORITES'});
  }
  catch(error) {
    console.log('ERROR adding favorite', error);
  }
}

function* fetchFavorites() {
  console.log('fetchFavorites Saga');
  try {
    const response = yield call(axios.get, '/api/favorites');
    yield put({ type: 'SET_FAVORITES', payload: response.data });
  }
  catch(error) {
    console.log('ERROR fetching favorites', error);
  }
}

function* favoritesSaga() {
  yield takeEvery( 'FETCH_FAVORITES', fetchFavorites);
  yield takeEvery( 'ADD_TO_FAVORITES', addFavorite);
}

export default favoritesSaga;