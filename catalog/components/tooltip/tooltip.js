import React, {Component} from "react";
import Markdown from "../../lib/markdown/index";
import PageHeader from "../../lib/pageHeader";
import standard from './standard/html/standard.md'
import withIcon from './with-icon/html/with-icon.md'
import colors from './colors/html/colors.md'
import alignment from './alignment/html/alignment.md'
import Modals from "../../zendesk/modals/modals";
const markdown = standard + withIcon + colors + alignment;

export default class Tooltip extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={'Tooltip'} />
        <Markdown source={markdown} scriptUrl={'/js/tooltip.min.js'} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
