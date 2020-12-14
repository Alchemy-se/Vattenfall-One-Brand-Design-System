import React, {Component} from "react";
import componentNaming from './component-naming/html/component-naming.md'
import blocks from './blocks/html/blocks.md'
import elements from './elements/html/elements.md'
import modifiers from './modifiers/html/modifiers.md'
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals";
const markdown = componentNaming + blocks + elements + modifiers
export default class Intro extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Atoms"}/>
				<Markdown source={markdown} />
				<Modals uri={this.props.uri} />
			</React.Fragment>
		)
	}
};
