import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standardList from './standard-lists/html/standard-lists.md'
import fileList from './file-list/html/file-list.md'

const markdown = standardList + fileList
export default class Lists extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Lists"}/>
				<Markdown source={markdown} />
			</React.Fragment>
		)
	}
};
