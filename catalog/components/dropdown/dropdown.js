import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import standardWithSemanticElements from './standard-with-semantic-elements/html/standard-with-semantic-elements.md'
import standard from './standard/html/standard.md'
import underlineStyle from './underline-style/html/underline-style.md'
import disable from './disabled/html/disabled.md'
import withCheckboxes from './with-checkboxes/html/with-checkboxes.md'

const markdown = standardWithSemanticElements + standard + underlineStyle + disable  + withCheckboxes
export default class DropdownList extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Drop-down List"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
