import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import HeroBlock from './heroBlock';
import HeroComponent from './HeroComponent';
import TextIntroButtons from '../../components/hero/intro-buttons/html/intro-buttons.md';
import Markdown from "../../lib/markdown";


const Hero = () => {
  const markdown = TextIntroButtons;
  return (
    <Fragment>  
      <PageHeader title='Hero Modules' />
      <Markdown source={markdown} />
      <section className="p-2 vf-border-top-gray-200"></section>
      <p>The Hero component is used for large blocks at the top of webpages to convey a key message or describe what the page is about</p>
      <HeroBlock 
        title='Hero with video' 
        text='The Hero module with video content is used mainly for pages that need to relate back to and anchor the connection with our external video content / campaigns.'
        textlineTwo='The headline should always be over two lines and displaying a play button 44px below. Headline and play button should both be vertically aligned and centered over the video and should not use drop shadows'
      />
      <HeroComponent 
        titleOne='Fossil-free within' 
        titleTwo='one generation' 
        video 
      />
      <HeroBlock 
        title='For Startpage(only)' 
        text='The Hero module with Video content and the Vattenfall stacked logotype should be used for Vattenfall Startpages only and not elsewhere.'
      />
      <HeroComponent 
        sectionClass='vf-hero vf-hero-startpage' 
        titleOne='Hero headline goes' 
        titleTwo='in two lines here' 
        video 
        logo
      />
      <HeroBlock 
        title='2 text lines + Button' 
        text='The Hero module should be used as in the example, when two rows of text over image with CTA button is needed.'
      />
      <HeroComponent 
        sectionClass='vf-hero vf-hero-twoline-button' 
        titleOne='Hero headline goes' 
        titleTwo='in two lines here' 
        button
      />
      <HeroBlock 
        title='1 text line + Button' 
        text='The Hero module should be used as in the example for one row of text over image with a CTA button'
      />
      <HeroComponent 
        sectionClass='vf-hero vf-hero-oneline' 
        titleOne='Hero headline goes here' 
        button
      />
      <HeroBlock 
        title='2 text lines' 
        text='The Hero module should be used as in the example, when two rows of headline text is needed.'
      />
      <HeroComponent 
        sectionClass='vf-hero vf-hero-twoline' 
        titleOne='Hero headline goes' 
        titleTwo='in two lines here'
      />
      <HeroBlock 
        title='1 text line' 
        text='The Hero module should be used when only one row of headline text is needed.'
      />
      <HeroComponent 
        sectionClass='vf-hero vf-hero-oneline' 
        titleOne='Hero headline goes here'
      />
      <HeroBlock 
        title='Text + Intro + Buttons' 
        text='The Hero module should be used as in the example when Headline, Intro text and Buttons are needed.'
        />
      <HeroComponent 
        sectionClass='vf-hero vf-hero-oneline' 
        titleOne='Hero headline goes here' 
        intro
      />
  </Fragment>
  );
};

export default Hero;