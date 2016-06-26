var React = require('react');
var WeatherDetails = require('../components/WeatherDetails');
var WeatherService = require('../services/WeatherService');

var WeatherDetailsContainer = React.createClass({
  getInitialState: function(){
    console.log(this.props.routeParams);
    return {
      weatherDetails: null,
      loading: true,
      city: this.props.routeParams.city
    }
  },
  componentDidMount: function(){
    WeatherService.getCurrentWeatherInfo(this.state.city).then( weatherInfo => {
        console.log(weatherInfo);
        this.setState({
          weatherDetails: weatherInfo,
          loading: false
        });
    });
  },
  render: function(){
    return (
      <WeatherDetails
        details={this.state.weatherDetails} />
    )
  }
});

module.exports = WeatherDetailsContainer;
