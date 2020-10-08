import React, {Component} from "react";
import markdown from "./responsive-utility-classes/html/responsive.md";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";

export default class Responsive extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Responsive"}/>
				<Markdown source={markdown} />
			</React.Fragment>
		)
	}
};
