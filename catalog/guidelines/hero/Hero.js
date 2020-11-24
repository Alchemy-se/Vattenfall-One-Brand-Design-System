import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import HeroBlock from './heroBlock';
import WithVideoHero from  '../../components/hero/basic-example/html/basic-example.md';
import StartPageHero from '../../components/hero/start-page/html/start-page.md';
import TwoLineButtonHero from  '../../components/hero/two-textline-button/html/two-textline-button.md';
import OneLineButtonHero from  '../../components/hero/one-textline-button/html/one-textline-button.md';
import TwoLineHero from '../../components/hero/two-textlines/html/two-textlines.md';
import OneLineHero from '../../components/hero/one-textline/html/one-textline.md';
import TextIntroButtons from '../../components/hero/intro-buttons/html/intro-buttons.md';
import Markdown from "../../lib/markdown";

const Hero = () => {

  const editMd = (mdText) => {
    const hideSourceCode = mdText.replace("showSource: true", "showSource: false");
    const removeH3 = hideSourceCode.substring(hideSourceCode.indexOf("\n") + 1);
    return removeH3;
  }

  return (
    <Fragment>  
      <PageHeader title='Hero Modules' />
      <section className="p-2 vf-border-top-gray-200"></section>
      <p>The Hero component is used for large blocks at the top of webpages to convey a key message or describe what the page is about</p>
      <HeroBlock 
        title='Hero with video' 
        text='The Hero module with video content is used mainly for pages that need to relate back to and anchor the connection with our external video content / campaigns.'
        textlineTwo='The headline should always be over two lines and displaying a play button 44px below. Headline and play button should both be vertically aligned and centered over the video and should not use drop shadows'
      >
        <Markdown source={editMd(WithVideoHero)} />
      </HeroBlock>  
       <HeroBlock 
        title='For Startpage (only)' 
        text='The Hero module with Video content and the Vattenfall stacked logotype should be used for Vattenfall Startpages only and not elsewhere.'
      >
        <Markdown source={editMd(StartPageHero)} />
      </HeroBlock>
     <HeroBlock 
        title='2 text lines + Button' 
        text='The Hero module should be used as in the example, when two rows of text over image with CTA button is needed.'
      >
        <Markdown source={editMd(TwoLineButtonHero)} /> 
      </HeroBlock>
      <HeroBlock 
        title='1 text line + Button' 
        text='The Hero module should be used as in the example for one row of text over image with a CTA button'
      >
        <Markdown source={editMd(OneLineButtonHero)} /> 
      </HeroBlock>
      <HeroBlock 
        title='2 text lines' 
        text='The Hero module should be used as in the example, when two rows of headline text is needed.'
      >
        <Markdown source={editMd(TwoLineHero)} />
      </HeroBlock>
      <HeroBlock 
        title='1 text line' 
        text='The Hero module should be used when only one row of headline text is needed.'
      >
        <Markdown source={editMd(OneLineHero)} />
      </HeroBlock>
      <HeroBlock 
        title='Text + Intro + Buttons' 
        text='The Hero module should be used as in the example when Headline, Intro text and Buttons are needed.'
      >
        <Markdown source={editMd(TextIntroButtons)} />
      </HeroBlock> 
  </Fragment>
  );
};

export default Hero;