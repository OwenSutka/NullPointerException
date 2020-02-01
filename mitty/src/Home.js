import React, { Component } from "react";

class Home extends Component {

	fileSystem () {
		console.log("File System Selected")
	}



	render () {
		return (
			<div class="home-group">
				<h2>Home</h2>
				<p>Import an Image of Your Equation:</p>
				<div class="import-group">
					<button>File System</button>
					<button>Clipboard</button>
					<button>Snipping Tool</button>
					<button>Camera</button>
				</div>
			</div>
		);
	}

}

export default Home;