import React, {Component} from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import {Drawer, Menu} from "antd";

const { SubMenu } = Menu;

import Designers from './designers/getting-started-designers';
import Developers from './developers/getting-started-developers';
import Examples from "./EXAMPLES";

const PACKAGE = require("../package.json");
// TODO verify if can place this somewhere else.
import 'antd/dist/antd.css';

import Welcome from "./WELCOME"

console.log("#DEBUG testing 2 #");

const CONTAINER_STYLE = {
	display: "flex",
	border: "1px solid green"
};

const DRAWER_BODY_STYLE = {
	background: "rgb(237, 241, 246"
};

const DRAWER_HEADER_STYLE = {
	background: "rgb(237, 241, 246"
};

const DRAWER_FOOTER_STYLE = {
	background: "rgb(237, 241, 246"
};

const DRAWER_HEADER_CONTENT = (
	<img src={'/img/docs/logo.svg'} />
);


export default class App extends Component {
	state = {
		drawerOpen: true
	};

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


	renderFooter= () => {
		const menuFooterLinkStyle = {
			color: '#1964A3',
			fontSize: '16px',
			fontWeight: 'normal',
			display: 'block',
			letterSpacing: 0,
			lineHeight: '32px',
			padding: '5px 0',
			textDecoration: 'none',
		};

		const menuFooterLinkIconStyle = {
			verticalAlign: 'baseline',
			marginRight: '5px'
		};

		const versionTextStyle = {
			color: "#222222",
			fontSize: "12px",
			marginBottom: 0
		};
		return (
			<div style={{ padding: '40px 42px', fontFamily: 'Vattenfall Hall' }}>
				<a href="https://app.goabstract.com/organizations/2776932d-ce7d-4fc3-8c46-0da875d726d3/projects" style={menuFooterLinkStyle}>
					<img style={menuFooterLinkIconStyle} src="/img/docs/abstract.svg" /> Abstract
				</a>
				<a href="https://github.com/Alchemy-se/Vattenfall-One-Brand-Design-System" style={menuFooterLinkStyle}>
					<img style={menuFooterLinkIconStyle} src="/img/docs/github.svg" /> Github
				</a>
				<p style={versionTextStyle}>{"Version "+PACKAGE.version}</p>
			</div>
		)
	}

	render() {
		return (
			<Router>
				<div style={CONTAINER_STYLE}>
					<Drawer
						bodyStyle={DRAWER_BODY_STYLE}
						headerStyle={DRAWER_HEADER_STYLE}
						footerStyle={DRAWER_FOOTER_STYLE}
						title={DRAWER_HEADER_CONTENT}
						placement="left"
						closable={true}
						onClose={this.closeDrawer}
						visible={this.state.drawerOpen}
						footer={this.renderFooter()}
					>
						<Menu onClick={() => {
							console.log("#DEBUG click #");
						}}
							  style={{ background: "rgb(237, 241, 246" }}
							  mode="inline">
							<SubMenu
								key="sub4"
								title={
									<span>
              							<span>Get started</span>
									</span>
								}
							>
								<Menu.Item key="/design"><Link to={"/design"}>Designers</Link></Menu.Item>
								<Menu.Item key="/getting-started"><Link to={"/getting-started"}>Developers</Link></Menu.Item>
							</SubMenu>
							<Menu.Item key="/examples"><Link to={"/examples"}>Examples</Link></Menu.Item>
							<SubMenu
								key="sub5"
								title={
									<span>
              							<span>Components</span>
									</span>
								}
							>
								<Menu.Item key="/grid"><Link to={"/grid"}>Grid</Link></Menu.Item>
								<Menu.Item key="/responsive"><Link to={"/responsive"}>Responsive</Link></Menu.Item>
							</SubMenu>
						</Menu>
					</Drawer>
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
			</Router>
		)
	}
}