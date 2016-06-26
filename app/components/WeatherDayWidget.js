var React = require('react');
var ReactIntl = require('react-intl');
var IntlProvider = ReactIntl.IntlProvider;
var FormattedDate = ReactIntl.FormattedDate;

const styles = {
  widget: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  image: {
    height: 130
  }
}

function WeatherDayWidget({day}) {
  return (
    <div style={styles.widget}>
      <img style={styles.image} src={`./app/images/weather-icons/${day.weather[0].icon}.svg`}/>
      <h3>
        <IntlProvider>
          <FormattedDate value={new Date(day.dt * 1000)} day="numeric" month="long" year="numeric"  />
        </IntlProvider>
      </h3>
    </div>
  )
}

module.exports = WeatherDayWidget;
