import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import reversed from './reversed/html/reversed.md'
import backgroundColors from './background-colors/html/background-colors.md'

const markdown = standard + reversed + backgroundColors ;
export default class MediaBlock extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Media block"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
