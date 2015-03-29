
var React = require('react');
var Foo = require('./foo');

var comp = React.createClass({

  render: function() {

  	console.log( 'props: ', this.props );

  	return (
  		<h1>{this.props.user.name}<br/>
  			<Foo user={this.props.user} />
  		</h1>		
    );
  },


});

module.exports = comp;
