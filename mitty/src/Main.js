import React, { Component } from "react";

import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

import Home from "./Home";

import About from "./About";

import HowItWorks from "./HowItWorks";

import Resources from "./Resources";

import ContactUs from "./ContactUs";

class Main extends Component {

	render() {
		return (
			<HashRouter>
				<div>
					<div className="main">
						<h1>MITTY</h1>
						<ul className="header">
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/about">About</NavLink></li>
							<li><NavLink to="/howItWorks">How It Works</NavLink></li>
							<li><NavLink to="/resources">Resources</NavLink></li>
							<li><NavLink to="/contactUs">Contact Us</NavLink></li>
						</ul>
						<div className="content">
							<Route path="/about" component={About}/>
							<Route path="/howItWorks" component={HowItWorks}/>
							<Route path="/resources" component={Resources}/>
							<Route path="/contactUs" component={ContactUs}/>
							<Route exact path="/" component={Home}/>
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;