import {Link} from "react-router-dom";
import React from "react";
import {Drawer, Menu} from "antd";

const { SubMenu } = Menu;

const PACKAGE = require("../../package.json");

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

const VFDrawer = ({closeDrawer, drawerOpen, closable}) => {
	return (
		<Drawer
			bodyStyle={DRAWER_BODY_STYLE}
			headerStyle={DRAWER_HEADER_STYLE}
			footerStyle={DRAWER_FOOTER_STYLE}
			title={DRAWER_HEADER_CONTENT}
			placement="left"
			onClose={closeDrawer}
			visible={drawerOpen}
			footer={renderFooter()}
			closable={closable}
			mask={false}
			width={250}
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
	)
};

export default VFDrawer;