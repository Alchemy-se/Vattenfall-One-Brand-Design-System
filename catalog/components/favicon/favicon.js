import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import assets from './assets/html/assets.md'
import standard from './default/html/default.md'

const markdown = standard + assets
export default class Favicon extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Favicon"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
