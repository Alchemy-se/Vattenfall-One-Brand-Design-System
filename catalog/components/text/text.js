import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import examples from './examples/html/examples.md'
import h1 from './h1/html/h1.md'
import h2 from './h2/html/h2.md'
import h3 from './h3/html/h3.md'
import h4 from './h4/html/h4.md'
import standardText from './standard-text/html/standard-text.md'
import smallerText from './smaller-text/html/smaller-text.md'
import preamble from './preamble/html/preamble.md'
import introInCaps from './intro-in-caps/html/intro-in-caps.md'
import introInCapsSmall from './intro-in-caps-small/html/intro-in-caps-small.md'
import Modals from "../../zendesk/modals/modals";

const markdown = examples + h1 + h2 + h3 + h4 + standardText +
	smallerText + preamble + introInCaps + introInCapsSmall

export default class Text extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Text"}/>
				<Markdown source={markdown} />
				<Modals uri={this.props.uri} />
			</React.Fragment>
		)
	}
};
