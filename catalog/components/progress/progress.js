import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import howItWorks from './how-it-works/html/how-it-works.md'
import smallerVersion from './smaller-version/html/smaller-version.md'
import Modals from "../../zendesk/modals/modals";
const markdown  = howItWorks + smallerVersion;
export default class Progress extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Progress"}/>
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
