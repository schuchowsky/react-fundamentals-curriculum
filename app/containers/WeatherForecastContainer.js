var React = require('react');
var WeatherForecast = require('../components/WeatherForecast');
var WeatherService = require('../services/WeatherService');

var WeatherForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    console.log(this.props.routeParams);
    return {
      weatherDetails: null,
      loading: true,
      city: this.props.routeParams.city
    }
  },
  handleDayClick: function(e, day){
    event.preventDefault();
    console.log('DAY CLICK', day);
    this.context.router.push({
      pathname: `details/${this.state.city}`,
      state: {
        day: day
      }
    })
  },
  componentDidMount: function(){
    WeatherService.getCurrentWeatherInfo(this.state.city).then( weatherInfo => {
        this.setState({
          weatherDetails: weatherInfo,
          loading: false
        });
    });
  },
  render: function(){
    return (
      <WeatherForecast
        details={this.state.weatherDetails}
        onDayClick={this.handleDayClick} />
    )
  }
});

module.exports = WeatherForecastContainer;
