import React, { Fragment } from 'react';

import PageHeader from '../pageHeader';
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
      <section className="p-2 vf-border-top-gray-200"></section>
      <p className={styles.guidelinesText}>
        The primary colors define our brand expression and our brand core is whit, blue and yellow.The blance between
        our primay and secondary colors are 80/20, and we always lead with our primary colors.
      </p>
      <p className={styles.guidelinesText}>
        Our two main CTA colors are Solar Yellow and Ocean Blue. Form more specific usage of our colors for buttons and
        liks, see Button page Style Guide. These two colors can only be used as CTA colors and for Global Alert
        message.Don't use this colors as background color.{' '}
      </p>
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Primary colors"
        text={`The primary colors define our brand expression and our brand core is whit, blue and yellow.The blance between
        our primay and secondary colors are 80/20, and we always lead with our primary colors. `}
      />
      <PrimaryColors />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Secondary Colors"
        text={`These colors re used in grphs, illustrations and infographics only. Some re allowed to be used as UX color,
         for exmple green and red`}
      />
      <SecondaryColors />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Color tones"
        text={`When creating 1-coloured graphics, you should primarily use these percent-values to differentiate sections of the graph.
        This is exemplified below in Vatenfall Pink, but you can use any of the primary or secondary colors as base.`}
      />
      <ColorTones />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Background colors"
        text={`The background colors are only to be used as a backkground color, e.g. behind icons and text.`}
      />
      <BackgroundColors />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Tertiary"
        text={`The tertiary colors are mainly grey tints. we use 'Light Grey' for 1px horizontal borders and the 'Light Grey' for input field borers.`}
      />
      <Tertiary />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Energy source colors"
        text={`Recomended colors for specific energy sources has been developed mainly to be used for information graphs.
        Please note that this is a recomendation and not a rule. Color coding for regulation compliance. The categories are:
        Renewable, Nuclear, District and Fossil.`}
      />
      <EnergySourceColors />
    </Fragment>
  );
};

export default Colors;
