import React from 'react';
const path = require('path');

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	handleClick() {
		this.setState({
			count: ++this.state.count
		});
	}

	render() {
		console.log(path, "+++++",__dirname, "+++++");
		return (
			<div>
				This is home!!<br/>
				当前计数:{this.state.count}<br/>
				<button onClick={() => this.handleClick()}>自增</button>
			</div>
		)
	}
}