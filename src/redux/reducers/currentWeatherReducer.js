const currentWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_WEATHER':
      return action.payload;
    default:
      return state;
  }
}

export default currentWeatherReducer;