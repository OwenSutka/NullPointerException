import React, { Component } from "react";

class Home extends Component {

	constructor(props) {
		super(props);
		this.fileSystem.bind(this);
	}

	fileSystem () {
		alert('File System');
	}

	clipboard () {
		alert('Clipboard');
	}

	snippingTool () {
		alert('Snipping Tool');
	}

	camera () {
		alert('Camera');
	}



	render () {
		return (
			<div className="home-group">
				<h2>Home</h2>
				<p>Import an Image of Your Equation:</p>
				<div className="import-group">
					<button onClick ={this.fileSystem}>File System</button>
					<button onClick ={this.clipboard}>Clipboard</button>
					<button onClick ={this.snippingTool}>Snipping Tool</button>
					<button onClick ={this.camera}>Camera</button>
				</div>
			</div>
		);
	}

}

export default Home;