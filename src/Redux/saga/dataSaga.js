import {select, call, put, takeEvery } from 'redux-saga/effects'

const API_KEY=process.env.REACT_APP_API_KEY || "d1845658f92b31c64bd94f06f7188c9c";
// const cityName="kanpur";
async function getApi(action) {
   try{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action?.cityName}&appid=${API_KEY}&units=metric`);
      if(!response.ok){
          throw new Error ("API or network issue");
      }
      const data=await response.json();
      return data;
  }catch(error){
      return error;
  }
}

function* fetchData(action,cityName) {
   try {
      const weatherData = yield call(getApi,cityName);
      yield put({type: 'GET_DATA_SUCCESS', weatherData:weatherData});
   } catch (e) {
      yield put({type: 'GET_DATA_FAILED', message: e.message});
   }
}

function* dataSaga(action,cityName) {
   yield takeEvery('GET_DATA_REQUESTED', fetchData,cityName);
}

export default dataSaga;