// Sources
// Weather bit API: https://www.weatherbit.io/api 
// ipify "Country + City" API: https://geo.ipify.org/docs
import axios from "axios"
import { useState, useEffect } from "react";
import React from "react";

export default function Weather() {

  const [coords, setCoords] = useState({ lat: 43.26, lon: -80.21 })
  const [weatherData, setWeatherData] = useState({
    temp: null,
    city_name: null,
    weather: {description: null}
  })

  useEffect(() => {
    const weatherParams = {
      key: process.env.REACT_APP_WEATHERBIT_KEY,
      days: 5,
      lang: 'en',
      unit: 'M',
      lon: coords.lon,
      lat: coords.lat,
    };

    // AbortController prevents multiple useEffect calls with UseStrict
    const controller = new AbortController() 

    navigator.geolocation.getCurrentPosition(res => {
        const latitude = res.coords.latitude
        const longitude = res.coords.longitude
        weatherParams.lat = latitude
        weatherParams.lon = longitude
        setCoords(() => ({
          lat: latitude,
          lon: longitude
        }))

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherParams.lat}&lon=${weatherParams.lon}&appid=${weatherParams.key}&units=metric`

        return axios.get(url, {signal: controller.signal})
      .then((res) => {
        console.log("openweather response:",res.data)
        const responseData = {
          temp: Math.round(res.data.main.temp),
          city_name: res.data.name,
          weather: {description: res.data.weather[0].description}
        }

        setWeatherData(() => responseData)
      })
      .catch((err) => {
        console.log(err)
      })
    })
    return (() => controller.abort())

  }, [coords.lon, coords.lat])


  return (
    <div className="w-fit bg-blue-300 rounded-3xl px-2 py-2 my-1 shadow">

      <h1 className="text-lg font-medium leading-6 text-neutral-700"> {weatherData.city_name} </h1>
      <div className="border-t border-gray-300"/>
      <h1 className="text-lg font-medium leading-6 text-neutral-700" > {weatherData.temp} °C</h1>
      <div className="border-t border-gray-300"/>
      <h1 className="text-lg font-medium leading-6 text-neutral-700"> {weatherData.weather.description}</h1>
    </div>
  );

};