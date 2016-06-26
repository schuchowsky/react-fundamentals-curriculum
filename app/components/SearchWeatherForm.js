var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300
  },
  button: {
    margin: 10
  }
}

function SearchWeatherForm({onSubmitForm, onUpdateCity, city, flexDirection}) {
  const direction = flexDirection === 'vertical' ? 'column' : 'row';
  return (
    <div style={styles.form}>
      <input type='text'
        className="form-control"
        style={styles.searchInput}
        placeholder='Foz do Iguaçu, Paraná'
        onChange={onUpdateCity}
        value={city} />
      <Link to={`/forecast/${city}`}>
        <button style={styles.button}
          className='btn btn-md btn-success' >
          Consultar clima
        </button>
      </Link>
    </div>
  )
}

SearchWeatherForm.propTypes = {
  orientation: PropTypes.oneOf(['vertical','horizontal']).isRequired,  
  onUpdateCity: PropTypes.func.isRequired
}

module.exports = SearchWeatherForm;
