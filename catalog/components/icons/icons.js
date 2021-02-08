import React, { Component } from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import example from './example/html/example.md';
import howToAddIcons from './how-to-add-icons/html/how-to-add-icons.md';
import ActionIcons from './action-icons/html/action-icons.md';
import InChargeIcons from './Incharge-icons/html/incharge-icons.md';
import IdentificationIcons from './identification-icons/html/identification-icons.md';
import NavigationIcons from './navigation-icons/html/navigation-icons.md';
import SmartHomeIcons from './smart-home-icons/html/smart-home-icons.md';
import SocialMediaIcons from './socialmedia-icons/html/socialmedia-icons.md';
import Sizing from "./sizing/html/sizing.md"
import Modals from "../../zendesk/modals/modals";

const markdown = howToAddIcons + example + ActionIcons + InChargeIcons + IdentificationIcons + NavigationIcons + SmartHomeIcons + SocialMediaIcons + Sizing;
export default class Icons extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Icons"} />
        <Markdown source={markdown} />
        <Modals uri={this.props.uri} />
      </React.Fragment>
    )
  }
};
