import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import WithVideoHero from  '../../components/hero/basic-example/html/basic-example.md';
import StartPageHero from '../../components/hero/start-page/html/start-page.md';
import TwoLineButtonHero from  '../../components/hero/two-textline-button/html/two-textline-button.md';
import OneLineButtonHero from  '../../components/hero/one-textline-button/html/one-textline-button.md';
import TwoLineHero from '../../components/hero/two-textlines/html/two-textlines.md';
import OneLineHero from '../../components/hero/one-textline/html/one-textline.md';
import TextIntroButtons from '../../components/hero/intro-buttons/html/intro-buttons.md';
import Markdown from "../../lib/markdown";
import GuidelinesBlock from "../guidelinesBlock";

const Hero = () => {

  const editMd = (mdText) => {
    const hideSourceCode = mdText.replace("showSource: true", "showSource: false");
    const removeH3 = hideSourceCode.substring(hideSourceCode.indexOf("\n") + 1);
    return removeH3;
  }

  return (
    <Fragment>
      <PageHeader title='Hero Modules' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <p style={{ marginBottom: '56px' }}>
        The hero component is used for large blocks at the top of webpages to
        convey a key message or describe what the page is about.
      </p>
      <GuidelinesBlock
        title='Hero with video'
        text='The hero module with video content is used mainly for pages where we want a connection to our external video content / campaigns.'
        textlineTwo='The headline should always be set on two lines with a play button 44px below the bottom line.
        The headline and play button should both be vertically aligned and centered over the video and should not have drop shadows.
        The mobile version should display a maximum of three lines of text.'
      >
        <Markdown source={editMd(WithVideoHero)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='For Startpage (only)'
        text='The Hero module with Video content and the Vattenfall stacked logotype should be used for Vattenfall Startpages only and not elsewhere. The mobile version should display a maximum of 3 rows of text. '
      >
        <Markdown source={editMd(StartPageHero)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='2 text lines + Button'
        text='The Hero module should be used as in the example, when two rows of text over image with CTA button is needed. The mobile version should display a maximum of 3 rows of text.'
      >
        <Markdown source={editMd(TwoLineButtonHero)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='1 text line + Button'
        text='The Hero module should be used as in the example for one row of text over image with a CTA button. The mobile version should display a maximum of 2 rows of text.'
      >
        <Markdown source={editMd(OneLineButtonHero)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='2 text lines'
        text='The Hero module should be used as in the example, when two rows of headline text is needed. The mobile version should display a maximum of 3 rows of text.'
      >
        <Markdown source={editMd(TwoLineHero)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='1 text line'
        text='The Hero module should be used when only one row of headline text is needed. The mobile version should display a maximum of 2 rows of text. '
      >
        <Markdown source={editMd(OneLineHero)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='Text + Intro + Buttons'
        text='The Hero module should be used as in the example when Headline, Intro text and Buttons are needed.The mobile version should display a maximum of 2 rows of text.'
      >
        <Markdown source={editMd(TextIntroButtons)} />
      </GuidelinesBlock>
      <GuidelinesBlock title='Design Sources'>
        <a
          style={{ marginLeft: '44px', marginTop: '28px' }}
          href='#'
          className='vf-link-with-arrow'
        >
          View on Abstract
        </a>
      </GuidelinesBlock>
    </Fragment>
  )
};

export default Hero;