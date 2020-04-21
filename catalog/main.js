import React, {Component} from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Designers from './designers/getting-started-designers';
import Developers from './developers/getting-started-developers';
import Examples from "./EXAMPLES";
import Hamburger from "./lib/hamburger";
import Drawer from "./lib/drawer";

// TODO verify if can place this somewhere else.
import 'antd/dist/antd.css';
import styles from "./main.scss";

import Welcome from "./WELCOME"


export default class App extends Component {
	state = {
		drawerOpen: window.innerWidth >= 1000,
		closable: window.innerWidth <= 999
	};

	resize = () => {
		console.log("#DEBUG window #", window.innerWidth);
		if(window.innerWidth >= 1000 && this.state.closable === true) {
			this.setState({
				closable: false,
				drawerOpen: true
			});
		} else if(window.innerWidth <= 999 && this.state.closable === false) {
			this.setState({
				closable: true,
				drawerOpen: false
			});
		}

	};

	componentWillMount() {
		window.addEventListener('resize', this.resize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize)
	}

	closeDrawer = () => {
		this.setState({
			drawerOpen: false
		});
	};

	openDrawer = () => {
		this.setState({
			drawerOpen: true
		});
	};

	render() {
		return (
			<Router>
				<div className={styles.container}>
					<Hamburger onClick={this.openDrawer}/>
					<Drawer closeDrawer={this.closeDrawer} drawerOpen={this.state.drawerOpen} closable={this.state.closable}/>
					<div className={styles.innerContainer}>
						<Switch>
							<Route path="/examples">
								<Examples />
							</Route>
							<Route path="/design">
								<Designers />
							</Route>
							<Route path="/getting-started">
								<Developers />
							</Route>
							<Route path="/grid">
								<span>grid</span>
							</Route>
							<Route path="/responsive">
								<span>responsive</span>
							</Route>
							<Route path="/">
								<Welcome />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}