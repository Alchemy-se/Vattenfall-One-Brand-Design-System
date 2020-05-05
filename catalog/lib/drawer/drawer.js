import {Link} from "react-router-dom";
import React from "react";
import {Drawer, Menu} from "antd";
import {useLocation} from "react-router-dom";
import GetStartedMenu from "./getStartedMenu";
import ComponentsMenu from "./componentsMenu";
import styles from "./drawer.scss";

const { SubMenu } = Menu;

const PACKAGE = require("../../../package.json");

const DRAWER_BODY_STYLE = {
	background: "rgb(237, 241, 246",
	boxShadow: "none"
};

const DRAWER_HEADER_STYLE = {
	background: "rgb(237, 241, 246"
};

const DRAWER_FOOTER_STYLE = {
	background: "rgb(237, 241, 246"
};

const DRAWER_STYLE = {
};

const renderFooter = () => {
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
};

const renderMenuContent = (_path) => {
	const splitted = _path.split("/");
	let path = "/"+splitted[1];
	switch(path) {
		case "/": {
			return null;
		}
		case "/examples": {
			return null;
		}
		case "/components": {
			return ComponentsMenu();
		}
		case "/get-started": {
			return GetStartedMenu();
		}
		default: {
			return null;
		}
	}
};

const VFDrawer = ({closeDrawer, drawerOpen, closable, onClick, selectedKeys}) => {
	const location = useLocation();
	const pathname = location.pathname;
	return (
		<Drawer
			className={styles.container}
			drawerStyle={DRAWER_STYLE}
			bodyStyle={DRAWER_BODY_STYLE}
			headerStyle={DRAWER_HEADER_STYLE}
			footerStyle={DRAWER_FOOTER_STYLE}
			title={null}
			placement="left"
			onClose={closeDrawer}
			visible={drawerOpen}
			footer={renderFooter()}
			closable={closable}
			mask={false}
			width={250}
		>
			<Menu
				onClick={onClick}
			  	style={{ background: "rgb(237, 241, 246" }}
				mode="inline"
				selectedKeys={selectedKeys}
			>
				{renderMenuContent(pathname)}
			</Menu>
		</Drawer>
	)
};

export default VFDrawer;