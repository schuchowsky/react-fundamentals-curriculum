var React = require('react');
var DayDetails = require('../components/DayDetails');
var WeatherService = require('../services/WeatherService');

var WeatherDetailsContainer = React.createClass({
  getInitialState: function(){
    return {
      day: this.props.location.state.day,
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
      <DayDetails day={this.state.day} />
    )
  }
});

module.exports = WeatherDetailsContainer;
