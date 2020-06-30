import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import ColourSpec from './ColourSpecs';

import styles from '../Guidelines.scss';

import examples from './examples.png';
import types1 from './types1.png';
import types2 from './types2.png';
import types3 from './types3.png';
import graphColors1 from './graphColors1.png';
import graphColors2 from './graphColors2.png';
import graphColors3 from './graphColors3.png';
import energySourceColours from './energySourceColours.png';
import primaryColours from './primaryColours.png';
import secondaryColours from './secondaryColours.png';
import examplePrimary from './examplePrimary.png';
import exampleEnergy from './exampleEnergy.png';
import exampleSecondary from './exampleSecondary.png';
import avoid1 from './avoid1.png';
import avoid2 from './avoid2.png';
import avoid3 from './avoid3.png';
import backgroundOk from './backgroundOk.png';
import backgroundBad from './backgroundBad.png';
import bestPractise from './best-practise.jpg';

const InfoGraphics = () => {
  return (
    <Fragment>
      <PageHeader title="Info Grphics" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="row align-items-start">
        <h2>Information graphics style</h2>
        <p className={`${styles.guidelinesText}`}>
          Sharing information and data in a clear and confident wy is part of the Vettenfall overall tonality, and
          graphs are a key
          <br />
          graphics elements to make data come alive. Vattenfall has a style for information graphics that is bold,
          simple and clear <br />
          To create the graphics, the Vattenfall colours can be used in different ways - please read more regarding
          color usage
          <br />
          below.
        </p>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={examples} />
        </div>
      </div>
      <div className="row align-items-start">
        <h2>Types of graphs</h2>
        <p className={`${styles.guidelinesText}`}>
          There are ifferent types of charts and graphs to be used - pie charts, bar graphs and lines <br />
          graphs. They are generally used for different things. Pie charts show how a whole is divided into <br />
          different parts, bar graphs show numbers that are independent of each other and line graphs <br />
          show numbers that have changed over time.
        </p>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={types1} />
          <h4 style={{ textAlign: 'center' }}>Example of a pie chart</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={types2} />
          <h4 style={{ textAlign: 'center' }}>Example of a bar graph</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={types3} />
          <h4 style={{ textAlign: 'center' }}>Example of a line graph</h4>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Colours for graphs</h2>
          <p className={`${styles.guidelinesText}`}>
            When creating information graphics mainly use the secondary colours, but the primary colours <br />
            are also allowed. There is also a colour palette specifically made for the different energy sources. <br />
            Please look further down on this page to see how to use these colors and to find the colour <br />
            codes. The color black is only used in text an lines, not as a color in the graph or chart.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={graphColors1} />
          <h4 style={{ textAlign: 'center' }}>Secondary colours</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={graphColors2} />
          <h4 style={{ textAlign: 'center' }}>Primary colours</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={graphColors3} />
          <h4 style={{ textAlign: 'center' }}>Energy source colours</h4>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Colour codes</h2>
        </div>
      </div>
      <h4>Primary colour codes</h4>
      <div className="vf-row">
        <ColourSpec name="Vattenfall Yellow" hex="#FFDA00" rgb="255, 218, 0" />
        <ColourSpec name="Vattenfall Blue" hex="#2071B5" rgb="32, 113, 181" />
        <ColourSpec name="Vattenfall Grey" hex="#4E4B4B" rgb="78, 75, 72" />
      </div>
      <h4>Secondary colour values</h4>
      <div className="vf-row">
        <ColourSpec name="Vattenfall Dark Green" hex="#235A60" rgb="35, 90, 96" />
        <ColourSpec name="Vattenfall Dark Blue" hex="#22314C" rgb="34, 49, 76" />
        <ColourSpec name="Vattenfall Pink" hex="#C1386A" rgb="193, 56, 106" />
        <div className="vf-col"></div>
      </div>
      <div className="vf-row">
        <ColourSpec name="Vattenfall Green" hex="#63BC80" rgb="99, 188, 128" />
        <ColourSpec name="Vattenfall Red" hex="#E64C2E" rgb="230, 76, 46" />
        <ColourSpec name="Vattenfall Purple" hex="#9365BC" rgb="147, 101, 188" />
        <ColourSpec name="Vattenfall Dark Purple" hex="#7A2B49" rgb="122, 43, 73" />
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Energy source colours</h2>
          <p className={`${styles.guidelinesText}`}>
            Recomended colours for specific energy sources has been developed mainly to be used for <br />
            information graphs. Please note that this is a recommendation and not a rule. Colour coding for
            <br />
            refulation compliance. The categories are: Renewable, Nuclear, District heating and Fossil.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <ColourSpec name="Hydro" hex="#2DA55D" rgb="46, 165, 93" />
        <ColourSpec name="Wind" hex="#4FCC51" rgb="79, 204, 81" />
        <ColourSpec name="Solar" hex="#81E0A8" rgb="129, 224, 168" />
        <ColourSpec name="Biomass" hex="#375E4E" rgb="55, 94, 78" />
      </div>
      <div className="vf-row">
        <ColourSpec name="Coal" hex="#E88A74" rgb="232, 138, 116" />
        <ColourSpec name="Gas" hex="#D85067" rgb="216, 80, 103" />
        <ColourSpec name="Nuclear" hex="#213D5E" rgb="33, 61, 94" />
        <ColourSpec name="District Heating" hex="#A376CC" rgb="163, 118, 204" />
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={energySourceColours} />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Colour usage</h2>
          <p className={`${styles.guidelinesText}`}>
            When creating information graphics mainly use the secondary colours, but the primary colours
            <br />
            are also allowed.Either create graphics using colours tones in the same colour range or use <br />
            colours in the same category: secondary, primary or energy source colours.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={primaryColours} />
          <h4 style={{ textAlign: 'center' }}>Secondary colours</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={secondaryColours} />
          <h4 style={{ textAlign: 'center' }}>Primary colours</h4>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <p className={`${styles.guidelinesText}`}>
            Always make sure that the colours used harmonize with each other. Use as few colours as <br />
            possible, to make graphs visibly balanced and keep the graphics in the blue needscope, not to <br />
            colourful.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={examplePrimary} />
          <h4 style={{ textAlign: 'center' }}>
            Example using primary
            <br />
            colours and energy source
            <br />
            colours in tones.
          </h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={exampleEnergy} />
          <h4 style={{ textAlign: 'center' }}>
            Example using energy
            <br />
            source colours that
            <br />
            harmonize with each other.
          </h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={exampleSecondary} />
          <h4 style={{ textAlign: 'center' }}>
            Example using secondary
            <br />
            colours that harmonize with
            <br />
            each other.
          </h4>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <p className={`${styles.guidelinesText}`}>
            Avoid mixing colours from different categories. Also avoid creating graphs with colours that <br />
            have too much contrast against each other.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={avoid1} />
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={avoid2} />
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={avoid3} />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Colour tones for web</h2>
          <p className={`${styles.guidelinesText}`}>
            When creating 1-coloured graphs, you should primarily use these percent-values to differentiate
            <br />
            sections of the graph. This is exemplified below but you can use any primary or secondary <br />
            colours as a base.
          </p>
        </div>
      </div>
      <h4>Hydro</h4>
      <div className="vf-row">
        <ColourSpec name="100%" hex="#2DA55D" rgb="45, 165, 93" />
        <ColourSpec name="70%" hex="#6CC08D" rgb="108, 192, 141" />
        <ColourSpec name="50%" hex="#96D2AE" rgb="150, 210, 174" />
        <ColourSpec name="30%" hex="#C0E4CE" rgb="192, 228, 206" />
        <ColourSpec name="10%" hex="#EAF6EE" rgb="234, 246, 238" />
        <div className="vf-col"></div>
      </div>
      <h4>Wind</h4>
      <div className="vf-row">
        <ColourSpec name="100%" hex="#4FCC51" rgb="79, 204, 81" />
        <ColourSpec name="70%" hex="#83DB85" rgb="131, 219, 133" />
        <ColourSpec name="50%" hex="#A7E5A8" rgb="167, 229, 168" />
        <ColourSpec name="30%" hex="#CAEFCA" rgb="202, 239, 202" />
        <ColourSpec name="10%" hex="#EAF6EE" rgb="237, 239, 202" />
        <div className="vf-col"></div>
      </div>
      <h4>Solar</h4>
      <div className="vf-row">
        <ColourSpec name="100%" hex="#81E0A8" rgb="129, 224, 168" />
        <ColourSpec name="70%" hex="#A6E9C2" rgb="166, 233, 194" />
        <ColourSpec name="50%" hex="#C0EFD4" rgb="192, 239, 212" />
        <ColourSpec name="30%" hex="#D9F5E4" rgb="217, 245, 228" />
        <ColourSpec name="10%" hex="#F2FBF6" rgb="242, 251, 246" />
        <div className="vf-col"></div>
      </div>
      <h4>Biomass</h4>
      <div className="vf-row">
        <ColourSpec name="100%" hex="#375E4E" rgb="55, 94, 78" />
        <ColourSpec name="70%" hex="#738E83" rgb="115, 142, 131" />
        <ColourSpec name="50%" hex="#9BAEA6" rgb="155, 174, 166" />
        <ColourSpec name="30%" hex="#C3CEC9" rgb="195, 206, 201" />
        <ColourSpec name="10%" hex="#EBEEED" rgb="235, 238, 237" />
        <div className="vf-col"></div>
      </div>
      <h4>Coal</h4>
      <div className="vf-row">
        <ColourSpec name="100%" hex="#E88A74" rgb="232, 138, 116" />
        <ColourSpec name="70%" hex="#EEAC9D" rgb="238, 172, 157" />
        <ColourSpec name="50%" hex="#F3C4B9" rgb="243, 196, 185" />
        <ColourSpec name="30%" hex="#F8DBD5" rgb="248, 219, 213" />
        <ColourSpec name="10%" hex="#FCF3F1" rgb="251, 237, 239" />
        <div className="vf-col"></div>
      </div>
      <h4>Nuclear</h4>
      <div className="vf-row">
        <ColourSpec name="100%" hex="#213D5E" rgb="33, 61, 94" />
        <ColourSpec name="70%" hex="#63778E" rgb="99, 119, 142" />
        <ColourSpec name="50%" hex="#909EAE" rgb="144, 158, 174" />
        <ColourSpec name="30%" hex="#BCC4CE" rgb="188, 196, 206" />
        <ColourSpec name="10%" hex="#E8EBEE" rgb=", 232, 235, 238" />
        <div className="vf-col"></div>
      </div>
      <h4>District Heating</h4>
      <div className="vf-row">
        <ColourSpec name="100%" hex="#A376CC" rgb="163, 118, 204" />
        <ColourSpec name="70%" hex="#BE9FDB" rgb="190, 159, 219" />
        <ColourSpec name="50%" hex="#D1BAE5" rgb="209, 186, 229" />
        <ColourSpec name="30%" hex="#E3D5EF" rgb="227, 213, 239" />
        <ColourSpec name="10%" hex="#F5F1F9" rgb="245, 241, 249" />
        <div className="vf-col"></div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Background colours</h2>
          <p className={`${styles.guidelinesText}`}>
            Always place information graphics on white or Vattenfall Light Grey background. Do not place <br />
            multi-coloured graphs on coloured backgrounds.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={backgroundOk} />
          <h4 style={{ textAlign: 'center' }}>
            Graphs can be placed on both white and
            <br />
            Vattenfall Grey backgrounds
          </h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={backgroundBad} />
          <h4 style={{ textAlign: 'center' }}>
            Do not place multi-coloured graphs on
            <br />
            coloured backgrounds.
          </h4>
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Background colours</h2>
          <p className={`${styles.guidelinesText}`}>
            Always place information graphics on white or Vattenfall Light Grey background. Do not place <br />
            multi-coloured graphs on coloured backgrounds.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={bestPractise} />
        </div>
      </div>
      <div className="row align-items-start">
        <div className="vf-col-md-8 vf-offset-md-2">
          <h2>Infographics - Motion</h2>
          <p className={`${styles.guidelinesText}`}>Infographics – Motion</p>
          <p className={`${styles.guidelinesText}`}>
            Infographics is of course the visualization of data in graphs, tables and numbers. Through our <br />
            motion ID philosophy of “ease-in-out”, infographics actually become the most powerful examples
            <br />
            of our identity in motion as we here allow a graph or number to develop in a smooth, controlled <br />
            “easing” movement with a high-quality perception. We have developed the following examples <br />
            of motion infographics, as a reference, but of course need to be created on their own for your <br />
            specific purposes and usageareas/channels.
          </p>
          <p className={`${styles.guidelinesText}`}>
            To read more about the “ease-in-out” motion ID philosophy, please see the description in the
            <br />
            Video &amp; Motion guidelines chapter
          </p>
          <a href="https://brandtoolbox.vattenfall.com/Styleguide/brandtwo/#page/70DBC29E-9802-4DDD-9937424FDCB53C25">
            "https://brandtoolbox.vattenfall.com/Styleguide/brandtwo/#page/70DBC29E-9802-4DDD-9937424FDCB53C25"
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoGraphics;
