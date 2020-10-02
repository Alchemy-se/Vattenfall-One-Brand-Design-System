import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import withPlainBackgroundColor from './with-plain-background-color/html/with-plain-background-color.md'

const markdown = standard + withPlainBackgroundColor;
export default class LargeQuote extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Large quote"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
