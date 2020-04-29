import React, {Component} from "react";
import mdText from "./button.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Button extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"- Button"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};