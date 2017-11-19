import axios from 'axios';

const API_KEY = "e92ba598a0191742e1c3dc5634a57767"; // https://home.openweathermap.org/api_keys
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_WEATHER = "FetchWeather";
// "&q={city name},{country code}"

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},IN`;
  const request = axios.get(url);

  console.log('Request: ', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
