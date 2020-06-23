import React, {Component} from "react";
import mdText from "./colors.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Colors extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Colors"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};