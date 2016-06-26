var React = require('react');
var axios = require('axios');

const secret = '6ed1871513a466a4549f6456045bbf0d';
const numberOfDays = 5;

function getCurrentWeatherInfo(city){
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${secret}`);
}

function getWeatherForecast(city){
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${secret}&cnt=${numberOfDays}`)
}

var WeatherService = {
  getCurrentWeatherInfo: city => {
    return getCurrentWeatherInfo(city)
      .then(weatherInfo => {        
        return getWeatherForecast(city).then(weatherForecast => {
          return {
            currentWeather: weatherInfo.data,
            forecast5days: weatherForecast.data.list
          }
        })
      })
  },
}

module.exports = WeatherService;
