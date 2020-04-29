import React, {Component} from "react";
import mdText from "./grid.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Grid extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Grid"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};