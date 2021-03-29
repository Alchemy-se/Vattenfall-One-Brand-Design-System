import React, { Fragment } from 'react';

import PageHeader from '../PageHeader';
import Description from '../Description';

import PrimaryColors from './PrimaryColors';
import SecondaryColors from './SecondaryColors';
import ColorTones from './ColorTones';
import BackgroundColors from './BackgroundColors';
import Tertiary from './Tertiary';
import EnergySourceColors from './EnergySourceColors';
import InChargeMapAppColors from "./InChargeMapAppColors"
import InChargeNordicColors from "./InChargeNordicColors"

import styles from '../Guidelines.scss';

const Colors = () => {
  return (
    <Fragment>
      <PageHeader title='Colours'></PageHeader>
      <div className='vf-row w-75'>
        <div className='vf-col'>
          <p>
            We lead with white to reflect confidence, transparency and
            premiumness. It provides air and space as well as allowing the eye
            to focus on what is important.
          </p>
          <p>
            Vattenfall Blue is our foundation, reflecting both the water and
            sky. Vattenfall Yellow represents the sun and is a colour of vision
            and warmth. Vattenfall Grey is the colour of the wordmark in the
            Vattenfall logotype.
          </p>
          <p>
            The secondary colours are inspired by the Nordic nature and are
            primarily used as accents in information graphics and illustrations.
            The background colours are also used as backdrops for sections of
            texts.
          </p>
          <p>
            — Vattenfall Yellow and Vattenfall Blue are our primary brand
            colours and should not be used for backgrounds.
          </p>
          <p>
            — White is a key colour of the brand expression. We always lead with
            white.
          </p>
          <p>
            — Secondary colours are used for information graphics, graphs and
            illustrations.
          </p>
          <strong>Rules</strong>
          <p>
            It’s important for Vattenfall to meet all web accessibility
            standards. Vattenfall encourages meeting the minimum contrast ratios
            specified by WCAG 2.1 Level AA for text, icons, other indicators,
            and background colours.
          </p>
        </div>
      </div>
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='Primary colours'
        text={
          <span>
            {
              'The primary colours define our brand expression and our brand core is white, blue and yellow.'
            }{' '}
            <br />{' '}
            {
              'The balance between our primary and secondary colours are 80/20, and we always lead with our primary colours.'
            }
          </span>
        }
      />
      <PrimaryColors />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='Secondary Colours'
        text='These colours are used in graphs, illustrations and infographics only. Some can be used as UX colour, e.g. green and red.'
      />
      <SecondaryColors />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='Colour tones'
        text={`When creating 1-coloured graphs, you should primarily use these percent-values to differentiate sections of the graph.
        This is exemplified below in Vattenfall Pink, but you can use any of the primary or secondary colours as a base.`}
      />
      <ColorTones />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='Background colours'
        text={
          <span>
            <p>
              Background colours are to be used to group important objects
              together and/or highlight important information.
            </p>
            <strong>Do's</strong>
            <p>
              – Background colours can be used to highlight important
              information.
              <br />
              – Graphs can be placed on white backgrounds.
              <br />– Graphs can also be placed on a Vattenfall Light Grey
              background.
              <br />– Icons can also be placed on white backgrounds.
              <br />– Icons can also be placed on Vattenfall Light Grey
              backgrounds.
              <br />– Illustrations can be placed on white backgrounds.
              <br />– Illustrations can also be placed on Vattenfall Light Grey
              backgrounds.
            </p>
            <strong>Don'ts</strong>
            <p>
              – Do not place graphs on other background colours, like Vattenfall
              Light Green.
              <br />– Do not place illustrations on other background colours,
              like Vattenfall Light Red.
            </p>
            <strong>Use</strong>
            <p>
              Notification colours: Pastel Yellow (attention) , Pastel green
              (positive) and Pastel Red (warning)
            </p>
            <p>
              Background colour in content blocks: Pastel Blue, Pastel Grey and
              Pastel Green. (Never use Light Blue Alt.)
            </p>
          </span>
        }
      />
      <BackgroundColors />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='Tertiary'
        text={`The tertiary colours are mainly grey tints. We use Lighter Grey for 1px horizontal borders and the Light Grey for input field borders.`}
      />
      <Tertiary />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='Energy source colours'
        text={`Recommended colours for specific energy sources has been developed mainly to be used for information graphs.
        Please note that this is a recommendation and not a rule. Colour coding for regulation compliance. The categories are: Renewable, Nuclear, District heating and Fossil.`}
      />
      <EnergySourceColors />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='Line colours'
        text={
          <span>
            <p>
              Sometimes lines are used to separate planes from each other.
              Depending on the background the following colours are used for
              lines:
            </p>
            <p>
              A line on white: Lighter Grey #E6E6E6
              <br />
              A line on a background colour, for example light blue: Light Grey
              #CCCCCC
              <br />A line on a blue or other coloured plane: 50% white.
            </p>
          </span>
        }
      />
      <section className='p-2 vf-border-top-gray-200'></section>
      <Description
        title='InCharge Nordic Colours'
        text={
          <span>
            <p>
              InCharge uses the same colour scale as the Vattenfall brand
              identity. In addition, InCharge has a light green colour (InCharge
              Green), that is used in the logotype, for icons and the CTA
              (call-to-action) buttons.
            </p>
            <p>
              White or soft toned colours are used for backgrounds, to create a
              fresh and clear look in line with the Vattenfall brand.
            </p>
          </span>
        }
      />
      <InChargeNordicColors />

      <section className='p-2 vf-border-top-gray-200'></section>
      
      <Description
        title='InCharge Map App Colours'
        text='These colours combination are specific for Incharge App.'
      />
      <InChargeMapAppColors />
      <section className='p-2 vf-border-top-gray-200'></section>
    </Fragment>
  )
};

export default Colors;
