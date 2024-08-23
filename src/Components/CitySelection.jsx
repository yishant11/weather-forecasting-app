import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import WeatherDisplay from './WeatherDisplay';
import searchImage from "./../assets/images/search.png"
import "./CitySelection.css"
import { getWeatherData,updateCity } from '../Redux/actions';

function CitySelection() {
  const dispatch = useDispatch();
  const [city,setCity]=useState("");
  const [formInput,setFormInput]=useState("");

  const data = useSelector(state => state.data.weatherData);
  const status = useSelector(state => state.data.status);
  const message = useSelector(state => state.data.message);
  const weatherData={result:data,status:status,message:message};
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCity(formInput);
  }

useEffect(()=>{
   if(city!==""){
    dispatch(getWeatherData(city));
   }
},[city])

  return (
    <div>
        <h2 className="text">Please type your city below to get weather details of selected city.</h2>
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='please enter your city name'
                onChange={(event)=>{
                    setFormInput(event.target.value);
                }}
            />
            <button className="btn" type="submit"><img src={searchImage}  width="20" height="20" loading="lazy"/></button>
        </form>
       
        <WeatherDisplay weatherData={weatherData}/>
    </div>
  )
}

export default CitySelection;