
var React = require('react');

var comp = React.createClass({

  render: function() {

  	return (
  		<div>
	  		Some name2:<br/>
	  		<h2>{this.props.user.species}</h2>		
  		</div>
    );
  },


});

module.exports = comp;
