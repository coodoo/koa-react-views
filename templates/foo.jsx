
var React = require('react');

var comp = React.createClass({

  render: function() {

  	return (
  		<h2>{this.props.user.species}</h2>		
    );
  },


});

module.exports = comp;
