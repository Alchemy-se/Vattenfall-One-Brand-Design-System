import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import error from './error/html/error.md'
import link from './link/html/link.md'
import metadata from './metadata/html/metadata.md'
import success from './success/html/success.md'
import warning from './warning/html/warning.md'
import Modals from "../../zendesk/modals";
const markdown = error + link + metadata + success + warning
export default class UtilityTypography extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Utility Typography"}/>
				<Markdown source={markdown} />
				<Modals uri={this.props.uri} />

			</React.Fragment>
		)
	}
};
