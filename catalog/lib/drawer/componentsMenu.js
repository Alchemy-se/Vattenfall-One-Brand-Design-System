import {Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";

const MENU_ITEMS = [
	{path: "/grid", name: "Grid"},
	{path: "/responsive", name: "Responsive"},
	{path: "/sizing", name: "Sizing"},
	{path: "/colors", name: "Colors"},
	{path: "/spacing", name: "Spacing"},
	{path: "/intro", name: "Atoms"},
	{path: "/css/text", name: "- Text"},
	{path: "/css/utility-typography", name: "- Utility Typography"},
	{path: "/css/button", name: "- Button"},
	{path: "/css/list", name: "- Lists"},
	{path: "/css/numbered-list", name: "- Numbered List"},
	{path: "/css/badge", name: "- Badge"},
	{path: "/css/preloader", name: "- Preloader"},
	{path: "/css/table", name: "- Table"},
	{path: "/css/tab-bar", name: "- Tab Bar"},
	{path: "/css/tooltip", name: "- Tooltip"},
	{path: "/css/drop-down", name: "- Drop-down List"},
	{path: "/css/input", name: "- Input"},
	{path: "/css/notification-module", name: "- Notification Module"},
	{path: "/css/subscribe", name: "- Subscribe"},
	{path: "/css/icon-text", name: "- Icon Text"},
	{path: "/css/gdpr-consent-module", name: "- GDPR Consent Module"},
	{path: "/css/card", name: "- Card"},
	{path: "/css/button-group", name: "- Button Group"},
	{path: "/css/cookie-banner", name: "- Cookie Banner"},
	{path: "/css/image-block", name: "- Image Block"},
	{path: "/css/image-with-caption", name: "- Image with Caption"},
	{path: "/css/shareable-image", name: "- Shareable Image"},
	{path: "/css/media-block", name: "- Media Block"},
	{path: "/css/linked-list-block", name: "- Linked List Block"},
	{path: "/css/parallax-image-block", name: "- Parallax Image Block"},
	{path: "/css/large-quote", name: "- Large Quote"},
	{path: "/css/small-quote", name: "- Small Quote"},
	{path: "/css/three-column", name: "- Three Column"},
	{path: "/css/topbar", name: "- Top Bar"},
	{path: "/css/pagination", name: "- Pagination"},
	{path: "/css/progress", name: "- Progress"},
	{path: "/css/organisms", name: "Organisms"},
	{path: "/css/footer", name: "- Footer"},
	{path: "/css/form", name: "- Form"},
	{path: "/css/hero", name: "- Hero"},
	{path: "/css/navigation", name: "- Navigation"},
	{path: "/utilities", name: "Utilities"},
	{path: "/utilities/favicon", name: "- Favicon"},
	{path: "/utilities/icons", name: "- Icons"}

];

const ComponentsMenu = () => {
	return MENU_ITEMS.map(item => {
		return (
			<Menu.Item key={"/components"+item.path}>
				<Link to={"/components"+item.path}>{item.name}</Link>
			</Menu.Item>
		);
	});
};

export default ComponentsMenu;