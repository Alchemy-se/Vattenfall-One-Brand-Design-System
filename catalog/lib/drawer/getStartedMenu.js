import {Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";

const MENU_ITEMS = ["/introduction","/design", "/developer"];
const MENU_ITEM_NAMES = ["Introduction", "Designers", "Developers"];

const GetStartedMenu = () => {


	return MENU_ITEMS.map((item, index) => {
		return (


			<Menu.Item key={"/get-started"+item}>
				<Link to={"/get-started"+item}>{MENU_ITEM_NAMES[index]}</Link>
			</Menu.Item>
		);
	});
};

export default GetStartedMenu;
