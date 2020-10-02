import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import threeColumn from './three-column/html/three-column.md'
import withBleed from './with-background-bleed/html/with-background-bleed.md'
import withOffsetBleed from './with-offseted-background-bleed/html/with-offseted-background-bleed.md'

const markdown = threeColumn + withBleed + withOffsetBleed ;
export default class ThreeColumn extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Three column"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
