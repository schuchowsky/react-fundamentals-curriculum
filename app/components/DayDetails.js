var React = require('react');
var ReactIntl = require('react-intl');
var IntlProvider = ReactIntl.IntlProvider;
var FormattedDate = ReactIntl.FormattedDate;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifContent: 'center',
    flexDirection: 'column',
    margin: 25
  },
  image: {
    height: 150
  }
}

function DayDetails ({ day }) {
  console.log('DAY DETAILS', day);
  return (
    <div style={styles.container}>
      <img style={styles.image} src={`./app/images/weather-icons/${day.weather[0].icon}.svg`}/>
      <h1>
        <IntlProvider locale="en">
          <FormattedDate value={new Date(day.dt * 1000)} day="numeric" month="long" year="numeric"  />
        </IntlProvider>
      </h1>
      <h2>{day.weather[0].description}</h2>
      <h2>Min temp: {day.temp.min}</h2>
      <h2>Max temp: {day.temp.max}</h2>
      <h2>Humidity: {day.humidity}</h2>
    </div>
  )
}

module.exports = DayDetails;
