var React = require('react');
var Header = require('./Header');

const styles = {
  container: {
    with: '100%',
    height: '100%'
  }
}

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
