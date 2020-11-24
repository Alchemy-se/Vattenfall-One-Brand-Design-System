import React, {Component} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import basicHero from './basic-example/html/basic-example.md';
import startPageHero from './start-page/html/start-page.md';
import oneTextlineHero from './one-textline/html/one-textline.md';
import oneTextlineAndButtonHero from './one-textline-button/html/one-textline-button.md';
import twoTextlineHero from './two-textlines/html/two-textlines.md';
import twoTextlineAndButtonHero from './two-textline-button/html/two-textline-button.md';
import textIntroButtonsHero from './intro-buttons/html/intro-buttons.md';
 
export default class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader title={"Hero"}/>
        <Markdown source={basicHero} />
        <Markdown source={startPageHero} />
        <Markdown source={twoTextlineAndButtonHero} />
        <Markdown source={oneTextlineAndButtonHero} />
        <Markdown source={twoTextlineHero} />
        <Markdown source={oneTextlineHero} />
        <Markdown source={textIntroButtonsHero} />
      </React.Fragment>
    )
  }
};
