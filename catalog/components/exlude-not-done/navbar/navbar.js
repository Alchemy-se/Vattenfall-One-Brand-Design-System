import React, {Component} from "react";
import Markdown from "../../../lib/markdown";
import PageHeader from "../../../lib/pageHeader";
import supportedContent from './supported-content/html/supported-content.md'
import brand from './brand/html/brand.md'
import nav from './nav/html/nav.md'
import forms from './forms/html/forms.md'
import text from './text/html/text.md'
import colorSchemes from './color-schemes/html/color-schemes.md'
import containers from './containers/html/containers.md'
import placement from './placement/html/placement.md'
import toggler from './toggler/html/toggler.md'
const markdown = supportedContent + brand + nav + forms + text + colorSchemes + containers
+ placement + toggler

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Navigation"}/>
        <Markdown source={markdown} />
      </React.Fragment>
    )
  }
};
