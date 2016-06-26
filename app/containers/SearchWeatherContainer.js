var React = require('react');
var SearchWeatherForm = require('../components/SearchWeatherForm');

var SearchFormContainer= React.createClass({
  getInitialState: function() {
    return {
      city: 'Foz do Iguaçu, Paraná'
    }
  },
  handleUpdateCity: function(event){
    this.setState({
      city: event.target.value
    });
  },
  render: function(){
    return (
      <SearchWeatherForm
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
        orientation={this.props.orientation} />
    )
  }
});

module.exports = SearchFormContainer;
