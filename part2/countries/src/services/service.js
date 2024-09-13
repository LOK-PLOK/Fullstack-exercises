import axios from "axios"
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const api_key = import.meta.env.VITE_SOME_KEY
const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';


const retrive = (name) =>{
    return axios.get(`${baseUrl}`)
}

const WeatherData = async (country) => {
    return axios.get(`${baseWeatherUrl}?q=${country}&appid=${api_key}&units=metric`)
  };

export default {retrive,WeatherData}