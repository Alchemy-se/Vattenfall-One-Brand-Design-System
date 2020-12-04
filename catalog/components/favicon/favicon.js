import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import assets from './assets/html/assets.md'
import standard from './default/html/default.md'
import Modals from "../../zendesk/modals/modals";

const markdown = standard + assets
export default class Favicon extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Favicon"}/>
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
