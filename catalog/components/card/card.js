import React, { Component } from "react";
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import example from './example/html/example.md'
import asALink from './as-a-link/html/as-a-link.md'
const markdown = example + asALink;

export default class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Card"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
