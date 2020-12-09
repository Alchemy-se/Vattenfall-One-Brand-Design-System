import React, {Component} from "react";
import GettingStartedDevelopersMarkdown from "./getting-started-developers.md";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";

export default class Developers extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Developers"}/>
				<Markdown source={GettingStartedDevelopersMarkdown} />
			</React.Fragment>
		)
	}
};
