import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import reversed from './reversed/html/reversed.md'
import noMedia from './no-media/html/no-media.md'
import noMediaReversed from './no-media-reversed/html/no-media-reversed.md'
import backgroundColors from './background-colors/html/background-colors.md'


const markdown = standard + reversed + noMedia + noMediaReversed + backgroundColors ;
export default class LinkedListBlock extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Linked list block"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
