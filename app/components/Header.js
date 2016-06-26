var React = require('react');
var Link = require('react-router').Link;
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
      <Link to='/'>
        <h2>Consulta de clima</h2>
      </Link>
      <SearchWeatherContainer orientation='vertical' />
    </div>

  )
}

module.exports = Header;
