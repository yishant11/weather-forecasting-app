import React from 'react'
import "../App.css" 
import windImage from "./../assets/images/wind.png"
import humidityImage from "./../assets/images/humidity.png"
import cloudImage from "./../assets/images/cloud.png"


function WeatherDisplay({weatherData}) {
  const {result,status,message}=weatherData;

  return (
    <div>
    {status==="loading" && <h2> Data fetching. Please wait ...</h2>}
    {status==="error" && <h2>{message}</h2>}
    {status==="success" && 
    <div>
      <div class="container">
         <div className='city'>
         <div className="cityName">
          <h2>{result?.name}</h2>
          </div>
          <div className='img'>
          <img  height="20px" width="30px" src={`https://flagcdn.com/144x108/${result?.sys?.country.toLowerCase()}.png`}  />
          </div>
         </div>
        <div className='cont3'>
          <h2>Temp: {result?.main?.temp} &nbsp;<sup>o</sup>C</h2>
        </div>
       
        <div className="weatherInfo">
        <div className='cont1'>
        <h2>WindSpeed: {result?.wind?.speed}</h2>
        <img src={windImage}></img>
        </div> 

        <div className='cont1'><h2>Humidity: {result?.main?.humidity} </h2>
        <img src={humidityImage}></img>
        </div>
        
        <div className='cont1'>
          <h2>Cloud: {result?.clouds?.all}</h2>
          <img src={cloudImage} ></img>
        </div>
        </div>
      </div>
        
    </div> 
    }
    </div>
    

  )
}

export default WeatherDisplay