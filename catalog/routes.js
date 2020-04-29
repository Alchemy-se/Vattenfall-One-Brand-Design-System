import React from "react";
import {Switch, Route, Redirect, useLocation} from "react-router-dom";

import Examples from "./EXAMPLES";
import Guidelines from "./Guidelines";
import Designers from "./designers/getting-started-designers";
import Developers from "./developers/getting-started-developers";

import Grid from "./components/grid";
import Responsive from "./components/responsive";
import Sizing from "./components/sizing";
import Colors from "./components/colors";
import Spacing from "./components/spacing";

import Text from "./components/text";
import UtilityTypography from "./components/utilityTypography";
import Button from "./components/button";
import Lists from "./components/lists";

import Welcome from "./WELCOME";
import Intro from "./components/intro";

import DynamicView from "./components/dynamicView";

function usePageViews(onRouteChange) {
	let location = useLocation();
	onRouteChange(location.pathname)
}

const COMPONENTS_ROUTES = [
	{path: "/grid", name: "Grid", component: <Grid />},
	{path: "/responsive", name: "Responsive", component: <Responsive/>},
	{path: "/sizing", name: "Sizing", component: <Sizing/>},
	{path: "/colors", name: "Colors", component: <Colors/>},
	{path: "/spacing", name: "Spacing", component: <Spacing/>},
	{path: "/intro", name: "Atoms", component: <Intro/>},
	// components/css
	{path: "/css/text", name: "- Text", component: <Text/>},
	{path: "/css/utility-typography", name: "- Utility Typography", component: <UtilityTypography/>},
	{path: "/css/button", name: "- Button", component: <Button/>},
	{path: "/css/list", name: "- Lists", component: <Lists/>},
	{path: "/css/numbered-list", name: "- Numbered List", mdFile: require("./components/numbered-list.md")},
	{path: "/css/badge", name: "- Badge", mdFile: require("./components/badge.md")},
	{path: "/css/preloader", name: "- Preloader", mdFile: require("./components/preloader.md")},
	{path: "/css/table", name: "- Table", mdFile: require("./components/table.md")},
	{path: "/css/tab-bar", name: "- Tab Bar", mdFile: require("./components/tab-bar.md")},
	{path: "/css/tooltip", name: "- Tooltip", mdFile: require("./components/tooltip.md")},
	{path: "/css/drop-down", name: "- Drop-down List", mdFile: require("./components/drop-down.md")},
	{path: "/css/input", name: "- Input", mdFile: require("./components/input.md")},
	{path: "/css/notification-module", name: "- Notification Module", mdFile: require("./components/notification-module.md")},
	{path: "/css/subscribe", name: "- Subscribe", mdFile: require("./components/subscribe.md")},
	{path: "/css/icon-text", name: "- Icon Text", mdFile: require("./components/icon-text.md")},
	{path: "/css/gdpr-consent-module", name: "- GDPR Consent Module", mdFile: require("./components/gdpr-consent-module.md")},
	{path: "/css/card", name: "- Card", mdFile: require("./molecules/card.md")},
	{path: "/css/button-group", name: "- Button Group", mdFile: require("./molecules/button-group.md")},
	{path: "/css/cookie-banner", name: "- Cookie Banner", mdFile: require("./molecules/cookie-banner.md")},
	{path: "/css/image-block", name: "- Image Block", mdFile: require("./molecules/image-block.md")},
	{path: "/css/image-with-caption", name: "- Image with Caption", mdFile: require("./molecules/image-with-caption.md")},
	{path: "/css/shareable-image", name: "- Shareable Image", mdFile: require("./molecules/shareable-image.md")},
	{path: "/css/media-block", name: "- Media Block", mdFile: require("./molecules/media-block.md")},
	{path: "/css/linked-list-block", name: "- Linked List Block", mdFile: require("./molecules/linked-list-block.md")},
	{path: "/css/parallax-image-block", name: "- Parallax Image Block", mdFile: require("./molecules/parallax-image-block.md")},
	{path: "/css/large-quote", name: "- Large Quote", mdFile: require("./molecules/large-quote.md")},
	{path: "/css/small-quote", name: "- Small Quote", mdFile: require("./molecules/small-quote.md")},
	{path: "/css/three-column", name: "- Three Column", mdFile: require("./molecules/three-column.md")},
	{path: "/css/topbar", name: "- Top Bar", mdFile: require("./molecules/topbar.md")},
	{path: "/css/pagination", name: "- Pagination", mdFile: require("./molecules/pagination.md")},
	{path: "/css/progress", name: "- Progress", mdFile: require("./molecules/progress.md")},
	{path: "/css/organisms", name: "Organisms", mdFile: require("./organisms/index.md")},
	{path: "/css/footer", name: "- Footer", mdFile: require("./organisms/footer.md")},
	{path: "/css/form", name: "- Form", mdFile: require("./organisms/form.md")},
	{path: "/css/hero", name: "- Hero", mdFile: require("./organisms/hero.md")},
	{path: "/css/navigation", name: "- Navigation", mdFile: require("./organisms/navigation.md")},
	// components/utilities
	{path: "/utilities/favicon", name: "- Favicon", mdFile: require("./utilities/favicon.md")},
	{path: "/utilities/icons", name: "- Icons", mdFile: require("./utilities/icons.md")},
	{path: "/utilities", name: "Utilities", mdFile: require("./utilities/utilities.md")},
	// Redirect if path is only /components.
	{path: "/", name: "", component: <Redirect to={"/components/grid"}/>},

]

const Routes = ({onRouteChange}) => {
	usePageViews(onRouteChange);
	return (
		<Switch>
			<Route path="/examples">
				<Examples />
			</Route>
			{
				COMPONENTS_ROUTES.map(item => (
						<Route key={"/components"+item.path} path={"/components"+item.path}>
							{item.component ?
								item.component
								:
								<DynamicView title={item.name} mdFile={item.mdFile}/>
							}
						</Route>
					)
				)
			}
			<Route path="/get-started/design">
				<Designers />
			</Route>
			<Route path="/get-started/developer">
				<Developers />
			</Route>
			<Route path={"/get-started"}>
				<Redirect to={"/get-started/design"}/>
			</Route>
			<Route path={"/guidelines"}>
				<Guidelines />
			</Route>
			<Route path="/">
				<Welcome />
			</Route>
		</Switch>
	);
};

export default Routes;