import React, {Component} from "react";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class DynamicView extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={this.props.title}/>
				<Markdown source={this.props.mdFile} />
			</React.Fragment>
		)
	}
};