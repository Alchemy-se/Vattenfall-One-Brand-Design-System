import React, {Component} from "react";
import Markdown from "../../lib/markdown/index";
import PageHeader from "../../lib/pageHeader";
import initialPosition from './initial-position/html/initial-position.md'
import updatingPreloader from './updating-the-preloader/html/updating-the-preloader.md'
const markdown = initialPosition + updatingPreloader;
export default class Preloader extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Preloader"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
