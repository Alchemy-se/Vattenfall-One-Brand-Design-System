import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import ColourSpec from './ColourSpecs';

import styles from '../Guidelines.scss';

const examples = '/img/guidelines/infographics/examples.png';
const types1 = '/img/guidelines/infographics/types1.png';
const types2 = '/img/guidelines/infographics/types2.png';
const types3 = '/img/guidelines/infographics/types3.png';
const graphColors1 = '/img/guidelines/infographics/graphColors1.png';
const graphColors2 = '/img/guidelines/infographics/graphColors2.png';
const graphColors3 = '/img/guidelines/infographics/graphColors3.png';
const energySourceColours = '/img/guidelines/infographics/energySourceColours.png';
const primaryColours = '/img/guidelines/infographics/primaryColours.png';
const secondaryColours = '/img/guidelines/infographics/secondaryColours.png';
const examplePrimary = '/img/guidelines/infographics/examplePrimary.png';
const exampleEnergy = '/img/guidelines/infographics/exampleEnergy.png';
const exampleSecondary = '/img/guidelines/infographics/exampleSecondary.png';
const avoid1 = '/img/guidelines/infographics/avoid1.png';
const avoid2 = '/img/guidelines/infographics/avoid2.png';
const avoid3 = '/img/guidelines/infographics/avoid3.png';
const backgroundOk = '/img/guidelines/infographics/backgroundOk.png';
const backgroundBad = '/img/guidelines/infographics/backgroundBad.png';
const bestPractise = '/img/guidelines/infographics/best-practise.jpg';

const InfoGraphics = () => {
  return (
    <Fragment>
      <PageHeader title="Info Graphics" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Information graphics style</h2>
          <p className={`${styles.guidelinesText}`}>
            Sharing information and data in a clear and confident way is part of the Vattenfall overall tonality, and 
            graphs are a key graphic elements to make data come alive. Vattenfall has a style for information graphics that is bold, 
            simple and clear. To create the graphs, the Vattenfall colors can be used in different ways – please read more regarding color usage 
            below.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={examples} />
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Types of graphs</h2>
          <p className={`${styles.guidelinesText}`}>
            There are different types of charts and graphs to be used – pie charts, bar graphs and lines graphs. They are generally 
            used for different things. Pie charts show how a whole is divided into 
            different parts, bar graphs show numbers that are independent of each other and line graphs  
            show numbers that have changed over time. 
          </p>
        </div>
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
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Colors for graphs</h2>
          <p className={`${styles.guidelinesText}`}>
          When creating information graphics mainly use the secondary colors, but the primary colors are also allowed. 
          There is also a color palette specifically made for the different energy sources. 
          Please look further down on this page to see how to use these colors and to find the color codes. The color black is only used in text and lines, not as a color in the graph or chart.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={graphColors1} />
          <h4 style={{ textAlign: 'center' }}>Secondary colors</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={graphColors2} />
          <h4 style={{ textAlign: 'center' }}>Primary colors</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={graphColors3} />
          <h4 style={{ textAlign: 'center' }}>Energy source colors</h4>
        </div>
      </div>
      <div className="vf-row w-75">
        <div className="vf-col ">
          <h2 className="use-in-toc">Color codes</h2>
        </div>
      </div>
      <h4>Primary color codes</h4>
      <div className="vf-row">
        <ColourSpec name="Vattenfall Yellow" hex="#FFDA00" rgb="255, 218, 0" />
        <ColourSpec name="Vattenfall Blue" hex="#2071B5" rgb="32, 113, 181" />
        <ColourSpec name="Vattenfall Grey" hex="#4E4B4B" rgb="78, 75, 72" />
      </div>
      <h4>Secondary color values</h4>
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
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc" >Energy source colors</h2>
          <p className={`${styles.guidelinesText}`}>
          Recomended colors for specific energy sources have been developed mainly to be used for information graphs. Please note that this is a recommendation and not a rule. 
          Color coding for refulation compliance. The categories are: Renewable, Nuclear, District heating and Fossil.
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
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Color usage</h2>
          <p className={`${styles.guidelinesText}`}>
            When creating information graphics mainly use the secondary colors, but the primary colors are also allowed. 
            Either create graphics using color tones in the same color range or use colors in the same category: secondary, primary or energy source colors.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={primaryColours} />
          <h4 style={{ textAlign: 'center' }}>Secondary colors</h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={secondaryColours} />
          <h4 style={{ textAlign: 'center' }}>Primary colors</h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col-12">
          <p className={`${styles.guidelinesText}`}>
          Always make sure that the colors used harmonize with each other. Use as few colors as possible, 
          to make graphs visibly balanced and keep the graphics in the blue needscope, not too colorful.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={examplePrimary} />
          <h4 style={{ textAlign: 'left' }}>
            Example using primary
            <br />
            colors and energy source
            <br />
            colors in tones.
          </h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={exampleEnergy} />
          <h4 style={{ textAlign: 'left' }}>
            Example using energy
            <br />
            source colors that
            <br />
            harmonize with each other.
          </h4>
        </div>
        <div className="vf-col">
          <img style={{ width: '100%' }} src={exampleSecondary} />
          <h4 style={{ textAlign: 'left' }}>
            Example using secondary
            <br />
            colors that harmonize with
            <br />
            each other.
          </h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col-12">
          <p className={`${styles.guidelinesText}`}>
          Avoid mixing colors from different categories. Also avoid creating graphs with colors that have too much contrast against each other.
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
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Color tones for web</h2>
          <p className={`${styles.guidelinesText}`}>
          When creating 1-colored graphs, you should primarily use these percent-values to differentiate sections of the graph. 
          This is exemplified below but you can use any of the primary or secondary colors as a base.
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
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Background colors</h2>
          <p className={`${styles.guidelinesText}`}>
            Always place information graphics on white or Vattenfall Light Grey background. Do not place multi-colored graphs on colored backgrounds.
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
            Do not place multi-colored graphs on
            <br />
            colored backgrounds.
          </h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Best practice</h2>
          <p className={`${styles.guidelinesText}`}>
          Always place information graphics on white or Vattenfall Light Grey background. Do not place multi-colored graphs on colored backgrounds.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={bestPractise} />
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col-12">
          <h2 className="use-in-toc">Infographics - Motion</h2>
          <p className={`${styles.guidelinesText}`}>
          Infographics refers to the visualization of data in graphs, tables and numbers. Through our motion ID philosophy of “ease-in-out”, infographics become the most powerful examples 
          of our identity in motion as we here allow a graph or number to develop in a smooth, controlled “easing” movement with a high-quality perception. 
          <br />
          </p>
          <p className={`${styles.guidelinesText}`}>
            To read more about the “ease-in-out” motion ID philosophy, please see the description in the Video &amp; Motion guidelines chapter
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoGraphics;

