import React, {Component} from "react";
import mdText from "./list.md";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class Lists extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"- Lists"}/>
				<Markdown source={mdText} />
			</React.Fragment>
		)
	}
};