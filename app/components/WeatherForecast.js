var React = require('react');
var WeatherDayWidget = require('./WeatherDayWidget');

const styles = {
  days: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  }
}

function WeatherForecast({ details, onDayClick }){
  return !details
    ? <p>Carregando...</p>
    : <div>
      <div className='text-center'>
        <h1>{details.currentWeather.name}</h1>
        <h3>Selecione um dos dias abaixo</h3>
      </div>
      <div style={styles.days}>
        {details.forecast5days.map(
          day => <WeatherDayWidget key={day.dt} day={day} onClick={onDayClick}/>
        )}
      </div>
    </div>
}

 module.exports = WeatherForecast;
