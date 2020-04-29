import React, {Component} from "react";
import mdText from "./text.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Text extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"- Text"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};