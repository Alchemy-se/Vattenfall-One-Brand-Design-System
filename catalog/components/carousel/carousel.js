import React, { Component } from "react";
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import standard from './standard/html/carousel.md'
export default class Carousel extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Input"} />
        <Markdown source={standard} />
      </React.Fragment>
    )
  }
};
