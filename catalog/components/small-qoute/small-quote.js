import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import withByline from './with-byline/html/with-byline.md'
import withoutByline from './without-byline/html/without-byline.md'
import Modals from "../../zendesk/modals/modals";
const markdown = withByline + withoutByline ;
export default class SmallQuote extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Small quote"}/>
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
