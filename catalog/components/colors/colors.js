import React, {Component} from "react";
import colors from './colors/html/colors.md'
import borders from './borders/html/borders.md'
import backgroundColor from './background-color/html/background-color.md'
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";

const markdown = colors + backgroundColor + borders
export default class Colors extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Colors"}/>
				<Markdown source={markdown} />
			</React.Fragment>
		)
	}
};
