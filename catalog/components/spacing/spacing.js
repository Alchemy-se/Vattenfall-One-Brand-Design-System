import React, {Component} from "react";
import spacers from './spacers/html/spacers.md'
import notation from './notation/html/notation.md'
import examples from './examples/html/examples.md'
import horizontalCentering from './horizontal-centering/html/horizontal-centering.md'
import negativeMargin from './negative-margin/html/negative-margin.md'

import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals/modals";
const markdown = spacers + notation + examples + horizontalCentering + negativeMargin;
export default class Spacing extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Spacing"}/>
				<Markdown source={markdown} />
				<Modals uri={this.props.uri} />
			</React.Fragment>
		)
	}
};
