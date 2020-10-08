import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import dimmedVersion from './dimmed-version/html/dimmed-version.md'

const markdown = standard + dimmedVersion;

export default class SharableImage extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Sharable image"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
