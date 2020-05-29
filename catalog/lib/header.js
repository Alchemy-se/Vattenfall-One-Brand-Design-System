import React, {useState} from "react"
import {Menu, Dropdown} from "antd";
import styles from "./header.scss";
import {Link} from "react-router-dom";
import Hamburger from "./hamburger";

function Header(props) {
	const [toggleDropdown, setToggleDropdown] = useState(false);

	function toggleDropDownHandler() {
		setToggleDropdown(!toggleDropdown);
	}

	function dropDownMenu() {
		return (
			<Menu
				className={styles.dropDownContainer}
				onClick={props.onClick}
				selectedKeys={props.selectedKeys}
			>
				<Menu.Item key="/get-started"><Link to={"/get-started/design"}>Get Started</Link></Menu.Item>
				<Menu.Item key="/components"><Link to={"/components/colors"}>Components</Link></Menu.Item>
				<Menu.Item key="/guidelines"><Link to={"/guidelines"}>Guidelines</Link></Menu.Item>
				<Menu.Item key="/examples"><Link to={"/examples"}>Examples</Link></Menu.Item>
				<Menu.Item key="/articles"><Link to={"/articles"}>Articles</Link></Menu.Item>
			</Menu>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<Link to={"/"}>
					<img src={'/img/docs/logo.svg'}/>
				</Link>
			</div>
			<Dropdown
				visible={toggleDropdown}
				overlayClassName={"dropdown"}
				overlay={dropDownMenu}
				trigger={["click"]}
			>
				<Hamburger className={styles.hamburger} onClick={() => {
					toggleDropDownHandler();
				}}/>
			</Dropdown>
			<Menu mode={"horizontal"} className={styles.menuContainer} onClick={props.onClick}
				  selectedKeys={props.selectedKeys}>
				<Menu.Item key="/get-started"><Link to={"/get-started/design"}>Get Started</Link></Menu.Item>
				<Menu.Item key="/components"><Link to={"/components/colors"}>Components</Link></Menu.Item>
				<Menu.Item key="/guidelines"><Link to={"/guidelines"}>Guidelines</Link></Menu.Item>
				<Menu.Item key="/examples"><Link to={"/examples"}>Examples</Link></Menu.Item>
				<Menu.Item key="/articles"><Link to={"/articles"}>Articles</Link></Menu.Item>
			</Menu>
		</div>
	);
};

export default Header;
