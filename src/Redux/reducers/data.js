import * as type from '../types';

const initialState = {
  weatherData: {},
  status:"initial",
  message:"",
}

export default function data(state = initialState, action) {
  
  switch (action.type) {
    case type.GET_DATA_REQUESTED:
      return {
        ...state,
        status:"loading",
        message:"api call strting"
      }
    case type.GET_DATA_SUCCESS:
      return {
        ...state,
        status:"success",
        weatherData:action.weatherData,
        message:"success"
      }
    case type.GET_DATA_FAILED:
      return {
        ...state,
        status:"error",
        message:action.message
      }
    default:
      return state
  }
}