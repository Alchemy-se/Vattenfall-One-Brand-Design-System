import React, { Component } from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import examples from './examples/html/examples.md'
import howToAddIcons from './how-to-add-icons/html/how-to-add-icons.md'
import Modals from "../../zendesk/modals";

const markdown = howToAddIcons + examples;
export default class Icons extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Icons"} />
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
