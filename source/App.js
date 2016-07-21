import React, { Component } from 'react';

class Cell extends Component {
	render(){
		return (
			<h1 className="bd-cell hide">My First Cell</h1>
		)
	}
}

React.render(<Cell />, document.getElementById('react'));