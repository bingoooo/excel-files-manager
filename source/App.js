import React, { Component } from 'react';

class Cell extends Component {
	render(){
		return (
			<h1>My First Cell</h1>
		)
	}
}

React.render(<Cell />, document.getElementById('react'));