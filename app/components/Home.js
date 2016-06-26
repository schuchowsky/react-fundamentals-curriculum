var React = require('React');
var Pattern = require('../images/pattern.svg');
var SearchWeatherContainer = require('../containers/SearchWeatherContainer');

const styles = {
  container: {
    backgroundImage: `url(${Pattern})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    color: '#fff',
  }
}

function Home() {
  return (
    <div style={styles.container}>
      <h1>Informe uma cidade e um estado</h1>
      <SearchWeatherContainer orientation='vertical' />
    </div>
  )
}

module.exports = Home;
