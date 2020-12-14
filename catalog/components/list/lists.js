import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standardList from './standard-lists/html/standard-lists.md'
import fileList from './file-list/html/file-list.md'
import Modals from "../../zendesk/modals/modals";

const markdown = standardList + fileList
export default class Lists extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Lists"}/>
				<Markdown source={markdown} />
				<Modals uri={this.props.uri} />
			</React.Fragment>
		)
	}
};
