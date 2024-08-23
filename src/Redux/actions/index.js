import * as type from '../types';

export function getWeatherData(action) {
  return { 
    type: type.GET_DATA_REQUESTED,
    cityName:action
  }
}

