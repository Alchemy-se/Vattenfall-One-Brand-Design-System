import React, {Component} from "react";
import mdText from "./sizing.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Sizing extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Sizing"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};