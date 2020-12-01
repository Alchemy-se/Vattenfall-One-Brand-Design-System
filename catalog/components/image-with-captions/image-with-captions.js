import React, { Component } from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import backgroundColors from './background-colors/html/background-colors.md'
import fullHeightImage from './full-height-image/html/full-height-image.md'
import Modals from "../../zendesk/modals";

const markdown = standard + fullHeightImage + backgroundColors;
export default class ImageWithCaptions extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Image with captions"} />
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
