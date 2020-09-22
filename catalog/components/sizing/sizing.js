import React, {Component} from "react";
import widthClasses from './width-classes/html/widht-classes.md'
import heightClasses from './height-classes/html/height-classes.md'
import vhClasses from './vh-classes/html/vh-classes.md'
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";

const markdown = widthClasses + heightClasses + vhClasses;
export default class Sizing extends Component {

	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Sizing"}/>
				<Markdown source={markdown} />
			</React.Fragment>
		)
	}
};
