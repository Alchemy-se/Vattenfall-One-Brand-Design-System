import React, {Component} from "react";
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import markdown from "./icons.md";
import AllIcons from "./allIcons";

export default class Icons extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Icons"}/>
        <Markdown source={markdown}/>
      </React.Fragment>
    )
  }
};
