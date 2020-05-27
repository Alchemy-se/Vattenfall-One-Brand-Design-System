import React from "react"
import { Menu } from "antd";
import styles from "./header.scss";
import {Link} from "react-router-dom";

const Header = ({onClick, selectedKeys}) => {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<Link to={"/"}>
					<img src={'/img/docs/logo.svg'} />
				</Link>
			</div>
			<Menu mode={"horizontal"} className={styles.menuContainer} onClick={onClick} selectedKeys={selectedKeys}>
				<Menu.Item key="/articles"><Link to={"/articles"}>Articles</Link></Menu.Item>
				<Menu.Item key="/get-started"><Link to={"/get-started/design"}>Get Started</Link></Menu.Item>
				<Menu.Item key="/components"><Link to={"/components/colors"}>Components</Link></Menu.Item>
				<Menu.Item key="/guidelines"><Link to={"/guidelines"}>Guidelines</Link></Menu.Item>
				<Menu.Item key="/examples"><Link to={"/examples"}>Examples</Link></Menu.Item>
			</Menu>
		</div>
	);
};

export default Header;
