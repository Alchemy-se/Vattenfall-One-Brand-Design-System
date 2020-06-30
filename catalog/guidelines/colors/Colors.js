import React, { Fragment } from 'react';

import PageHeader from '../PageHeader';
import Description from '../Description';

import PrimaryColors from './PrimaryColors';
import SecondaryColors from './SecondaryColors';
import ColorTones from './ColorTones';
import BackgroundColors from './BackgroundColors';
import Tertiary from './Tertiary';
import EnergySourceColors from './EnergySourceColors';

import styles from '../Guidelines.scss';

const Colors = () => {
  return (
    <Fragment>
      <PageHeader title="Colors"></PageHeader>
      <div className="vf-row w-75">
        <div className="vf-col">
          <p>
            We lead with white to reflect confidence, transparency and premiumness. It provides air and space as well as allows the eye to focus on what is important.
            <br/>
            <br/>
            Blue is our foundation reflection both water and sky. Yellow is both the sun and a color of vision and warmth. Equally used scarcely, but primarily as an activation color in digital channels.
            <br/>
            <br/>
            The secondary colors are inspired by the nordic nature and are primarily used as accents in infographics and illustrations. The background colors are also used as backdrops for sections of texts.
            <br/>
            <br/>
            — Vattenfall Yellow and Vattenfall Blue are our primary brand colors and should not be used as backgrounds.
            <br/>
            — White is a key color of the brand expression. We always lead with white.
            <br/>
            — Secondary colors are to be used for information graphics, graphs and illustrations.
            <br/>
            <br/>
            <strong>Rules</strong>
            <br/>
            It’s important for Vattenfall to meet all web accessibility standards. Vattenfall encourages meeting the minimum contrast ratios specified by WCAG 2.1 Level AA for text, icons, other indicators, and background colors.
          </p>
        </div>
      </div>
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Primary colors"
        text={<span>{"The primary colors define our brand expression and our brand core is white, blue and yellow."} <br/> {"The balance between our primary and secondary colors are 80/20, and we always lead with our primary colors."}</span>}
      />
      <PrimaryColors />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Secondary Colors"
        text="These colors are to be used in graphs, illustrations and infographics only. Some are allowed to be used as UX color; for example green an red."
      />
      <SecondaryColors />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Color tones"
        text={`When creating 1-coloured graphs, you should primarily use these percent-values to differentiate sections of the graph. 
        This is exemplified below in Vattenfall Pink, but you can use any of the primary or secondary colors as a base.`}
      />
      <ColorTones />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Background colors"
        text={
          (
            <span>
              Background colors are to be used to group important objects together and/or highlight important information.
              <br/>
              <br/>

              <strong>Do's</strong>
              <br/>
              – Background colors can also be used to highlight important information.
              <br/>
              – Graphs can be placed on white backgrounds
              <br/>
              – Graphs can also be placed on a Vattenfall Light Grey background.
              <br/>
              – Icons can also be placed on white backgrounds.
              <br/>
              – Icons can also be placed on Vattenfall Light Grey backgrounds.
              <br/>
              – Illustrations can be placed on white backgrounds.
              <br/>
              – Illustrations can also be placed on Vattenfall Light Grey backgrounds.
              <br/>
              <br/>
              <strong>Don'ts</strong>
              <br/>
              – Do not place graphs on other background colors, like Vattenfall Light Green.
              <br/>
              – Do not place illustrations on other background colors, like Vattenfall Light Red.
              <br/>
              <br/>
              <strong>Use</strong>
              <br/>
              Notification colors: Pastel Yellow (attention) , Pastel green (positive) and Pastel Red (warning)
              <br/>
              Background color in content blocks: Pastel Blue, Pastel Grey and Pastel Green. (Never use Light Blue Alt.)
            </span>
          )
        }
      />
      <BackgroundColors />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Tertiary"
        text={`The tertiary colors are mainly grey tints. We use ‘Lighter Grey’ for 1px horizontal borders and the ‘Light Grey’ for inputfield borders.`}
      />
      <Tertiary />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Energy source colors"
        text={`Recommended colours for specific energy sources has been developed mainly to be used for information graphs. 
        Please note that this is a recommendation and not a rule. Colour coding for regulation compliance. The categories are: Renewable, Nuclear, District heating and Fossil.`}
      />
      <EnergySourceColors />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="What color do lines get?"
        text={(<span>
          Sometimes lines are used to seperate planes from eachother. Depending on the background the following colors are used for lines:
          <br/>
          <br/>
          A line on white: 'Lighter Grey' #E6E6E6
          <br/>
          A line on a background color, for example light blue: ‘Light Grey’ #CCCCCC
          <br/>
          A line on a blue or other colored plane: 50% white.
        </span>)}
      />
    </Fragment>
  );
};

export default Colors;
