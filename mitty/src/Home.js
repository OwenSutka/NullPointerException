import React, { Component } from "react";
import Result from './Result'

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hasImage: false,
			hasOutput: false,
			image: "",
			output: "",
		};
		this.output = "";
		this.fileSystem = this.fileSystem.bind(this);
		this.clipboard = this.clipboard.bind(this);
		this.snippingTool = this.snippingTool.bind(this);
		this.camera = this.camera.bind(this);
		this.getConversion = this.getConversion.bind(this);
	}

	fileSystem () {
		// alert('File System');
		this.setState({
			hasImage: true,
			image: "Image obtained from fileSystem"
		});
	}

	clipboard () {
		// alert('Clipboard');
		this.setState({
			hasImage: true,
			image: "Image obtained from clipboard"
		});
	}

	snippingTool () {
		// alert('Snipping Tool');
		this.setState({
			hasImage: true,
			image: "Image obtained from snippingTool"
		});
	}

	camera () {
		// alert('Camera');
		this.setState({
			hasImage: true,
			image: "Image obtained from camera"
		});
	}

	getConversion() {
		this.setState({
			hasOutput: true,
		});
	}

	ImagePreview(input) {
		return (
		<div className="preview">
			<h3>Image Preview</h3>
			<div className="view">
				<p>{input}</p> 
			</div>
			<div className="editing">
				<h4>Tools</h4>
				<div className="image-tools">
					<button>Crop</button><br />
					<button>Reset Image</button><br />
					<button onClick={this.getConversion}>Submit Image</button>
				</div>
			</div>
		</div>);
	}

	render () {
		return (
			<div className="home-group">
				<h2>Home</h2>
				<h3>Import an Image of Your Equation:</h3>
				<div className="import-group">
					<button onClick ={this.fileSystem}>File System</button>
					<button onClick ={this.clipboard}>Clipboard</button>
					<button onClick ={this.snippingTool}>Snipping Tool</button>
					<button onClick ={this.camera}>Camera</button>
				</div>
				<div className="output-group">
					{this.state.hasImage ? this.ImagePreview(this.state.image) : null}
					{this.state.hasOutput ? <Result plain="(5)/(3)" latex="\frac{5}{3}"/> : null}
				</div>
			</div>
		);
	}
}

export default Home;