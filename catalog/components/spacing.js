import React, {Component} from "react";
import mdText from "./spacing.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Spacing extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Spacing"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};