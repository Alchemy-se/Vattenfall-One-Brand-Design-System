import React, {Component} from "react";
import mdText from "./utility-typography.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class UtilityTypography extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Utility Typography"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};