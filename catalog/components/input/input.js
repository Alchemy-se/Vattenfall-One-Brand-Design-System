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
import Modals from "../../zendesk/modals/modals";
import altStandard from "./alternative-with-label/standard/html/standard.md"
import altWithTooltip from "./alternative-with-label/with-tooltip/html/with-tooltip.md"
import altStandardError from "./alternative-with-label/standard-error/html/standard-error.md"
import altStandardDetailedText from "./alternative-with-label/detailed-text/html/detailed-text.md"
import altTextarea from "./alternative-with-label/textarea/html/textarea.md"
import altTextareaDetailedText from "./alternative-with-label/textarea-and-detailed-text/html/textarea-and-detailed-text.md"


const markdown =
  standardWithPlaceholder +
  standard +
  textarea +
  number +
  underlineStyle +
  withTooltip +
  warningState +
  errorState +
  altStandard +
  altWithTooltip +
  altStandardError +
  altStandardDetailedText +
  altTextarea +
  altTextareaDetailedText

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
