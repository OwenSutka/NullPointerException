import React, { Component } from "react";

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hasImage: false,
			output: "",
		};
		this.output = "";
		this.fileSystem = this.fileSystem.bind(this);
		this.clipboard = this.clipboard.bind(this);
		this.snippingTool = this.snippingTool.bind(this);
		this.camera = this.camera.bind(this);
	}

	fileSystem () {
		// alert('File System');
		this.setState({
			hasImage: true,
			output: "Image obtained from fileSystem"
		});
	}

	clipboard () {
		// alert('Clipboard');
		this.setState({
			hasImage: true,
			output: "Image obtained from clipboard"
		});
	}

	snippingTool () {
		// alert('Snipping Tool');
		this.setState({
			hasImage: true,
			output: "Image obtained from snippingTool"
		});
	}

	camera () {
		// alert('Camera');
		this.setState({
			hasImage: true,
			output: "Image obtained from camera"
		});
	}

	ImagePreview(input) {
		return (
		<div className="image-preview">
			<div className="preview">
				<h3>Image Preview</h3>
				<p>{input}</p> 
			</div>
			<div className="cropping-tools"></div>
		</div>);
	}

	Result(input) {
		return (
			<div className="result-output">
	
			</div>
		)
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
				{this.state.hasImage ? this.ImagePreview(this.state.output) : null}
				{this.state.hasOutput ? this.Result() : null}
			</div>
		);
	}
}

export default Home;