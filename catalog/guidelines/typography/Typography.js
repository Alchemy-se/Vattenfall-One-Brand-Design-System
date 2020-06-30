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
        <div className="vf-col">
          <p className={styles.guidelinesText}>
            Hall is a bespoke typeface that mirrors and embodies the qualities of a true market leader – as expected by our target group: confident, competent and determined.
            <br/>
            <br/>
            Yet, it should feel stable, organic, and personable and at the same time emphasise our engineering and functional capacity. Being bold without being arrogant, it creates credibility for our capability to act on on a broader scale. Developed together with the wordmark and icons, it creates a strong, recognisable and coherent identity.
            <br/>
            <br/>
            <strong>Rules for headings</strong>
            <br/>
            Always use Hall Display Bold for 30px and above
            <br/>
            Always use Hall Bold for under 30px
          </p>
        </div>
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
