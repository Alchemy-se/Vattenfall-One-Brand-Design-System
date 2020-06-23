import React, {Component} from "react";
import mdText from "./responsive.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Responsive extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Responsive"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};