var React = require('react');
var SearchWeatherContainer = require('../containers/SearchWeatherContainer');

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: '5px'
  },

}

function Header(){
  return (
    <div style={styles.container}>
      <h2>Consulta de clima</h2>
      <SearchWeatherContainer orientation='vertical' />
    </div>

  )
}

module.exports = Header;
