import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import reversed from './reversed/html/reversed.md'
import Modals from "../../zendesk/modals/modals";

const markdown = standard + reversed;
export default class ImageBlock extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={'Image Blocks'}/>
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};

