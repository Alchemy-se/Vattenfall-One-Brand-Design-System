import React, { Component } from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import overview from './component-overview/html/component-overview.md'
import workingWithIcons from './working-with-icons/html/working-with-icons.md'
import disabledAndActiveStates from './disabled-and-active-states/html/disabled-and-active-states.md'
import alignment from './alignment/html/alignment.md'

const markdown = overview + workingWithIcons + disabledAndActiveStates + alignment;
export default class Pagination extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Pagination"} />
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
