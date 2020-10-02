import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import reversed from './reversed/html/reversed.md'

const markdown = standard + reversed;
export default class ImageBlock extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={'Image block'}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};

