import React, { Fragment } from 'react';

import PageHeader from '../pageHeader';
import HeaderH1 from './HeaderH1';
import HeaderH2 from './HeaderH2';
import HeaderH3 from './HeaderH3';
import HeaderH4 from './HeaderH4';
import PreambleText from './PreambleText';
import BodyTextLarge from './BodyTextLarge';
import BodyTextSmall from './BodyTextSmall';
import IntroInCaps from './IntroInCaps';

import styles from '../Guidelines.scss';
import typographyStyles from './Typography.scss';

import placeholderImg from '../Untitled.png';

const Typography = () => {
  return (
    <Fragment>
      <PageHeader title="Typography" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <p className={styles.guidelinesText}>
          Typografic set in UI Kit is following overll 4x4 rule (se UI Grids). All type size values are a multiple of 4.
          It is vital to <br />
          keep these numbers straight in order to comply with original grids &amp; measurements and create harmonious,
          structured <br />
          design. At all times avoid creating new text styles, which will clutter up the Sketch documents and are not
          shareable
          <br />
          between different documents. Instead, always use the Text Symbols provided in the UI Kit under section 'Text'.
        </p>
        <p className={styles.guidelinesText}>
          All Text Symbols have certain constraints in resizing for your convinience. They are also set up with a
          Footprint for you <br />
          to be able to place the symbol on the vertical grid correctly at all times.
        </p>
        <p className={styles.guidelinesText}>
          In case you are looking for a specific type combinatins, paragrph design styles etc. please refer to the
          section 'Text-
          <br />
          Compositions'.
        </p>
      </div>
      <HeaderH1 />
      <section className="p-2 vf-border-top-gray-200"></section>
      <HeaderH2 />
      <section className="p-2 vf-border-top-gray-200"></section>
      <HeaderH3 />
      <section className="p-2 vf-border-top-gray-200"></section>
      <HeaderH4 />
      <section className="p-2 vf-border-top-gray-200"></section>
      <PreambleText />
      <section className="p-2 vf-border-top-gray-200"></section>
      <BodyTextLarge />
      <section className="p-2 vf-border-top-gray-200"></section>
      <BodyTextSmall />
      <section className="p-2 vf-border-top-gray-200"></section>
      <IntroInCaps />
    </Fragment>
  );
};

export default Typography;
