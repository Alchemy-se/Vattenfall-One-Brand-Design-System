import React, { Component } from "react";
import standardWithPlaceholder
  from './standard-with-css-placeholder-triggers/html/standard-with-css-placeholder-triggers.md'
import standard from './standard/html/standard.md'
import textarea from './textarea/html/textarea.md'
import number from './number/html/number.md'
import underlineStyle from './underline-style/html/underline-style.md'
import withTooltip from './with-tooltip/html/with-tooltip.md'
import warningState from './warning-state/html/warning-state.md'
import errorState from './error-state/html/error-state.md'
import Markdown from "../../lib/markdown/index";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals";

const markdown = standardWithPlaceholder + standard + textarea + number + underlineStyle + withTooltip
  + warningState + errorState;

export default class Input extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Input"} />
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
