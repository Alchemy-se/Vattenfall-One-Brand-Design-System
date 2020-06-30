import React, { Fragment } from 'react';
import PageHeader from '../pageHeader';
import styles from '../Guidelines.scss';

import Group4 from './Group 4.png';
import Group5 from './Group 5.png';
import Group6 from './Group 6.png';
import Group7 from './Group 7.png';
import Group16 from './Group 16.png';
import Group17 from './Group 17.png';
import desktopModule01 from './01_Group 18.png';
import desktopModule02 from './02_double88spacer.png';
import desktopModule03 from './03_Group 19.png';
import desktopModule04 from './04_spacer_Group 4 Copy 2.png';
import desktopModule05 from './05_Group 15.png';

const Spacers = () => {
  return (
    <Fragment>
      <PageHeader title="Spacers" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <p className={`${styles.guidelinesText}`}>
        The Spacers come in four sizes, Small 28px, Medium 44px, Large 56px and Extra Large 88px. You'll find them under{' '}
        <br />
        Utility in the library. Important to note is that all distances between individual modules are 88px aka the
        "Spacer - Extra <br />
        Large" on the desktop and 28ps on Mobile.
      </p>
      <div className="vf-row w-50">
        <div className="vf-col-lg-12">
          <h4>Spacer - Extra large - 88px</h4>
          <img style={{ width: '100%' }} src={Group7} />
        </div>
        <div className="vf-col-lg-12">
          <h4>Spacer - Large - 56px</h4>
          <img style={{ width: '100%' }} src={Group6} />
        </div>
        <div className="vf-col-lg-12">
          <h4>Spacer - Medium - 44px</h4>
          <img style={{ width: '100%' }} src={Group5} />
        </div>
        <div className="vf-col-lg-12">
          <h4>Spacer - Small - 28px</h4>
          <img style={{ width: '100%' }} src={Group4} />
        </div>
      </div>
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="row align-items-start">
        <h2>Example - Desktop</h2>
        <p className={`${styles.guidelinesText}`}>
          Example of applied spacers in the Image block Module. To visually see the spacers, turn on eye symbol inside
          of "Utility / <br />
          Spacers"
        </p>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img style={{ width: '100%' }} src={Group16} />
        </div>
      </div>
      <div className="row align-items-start">
        <h2>Example - Mobile</h2>
        <p className={`${styles.guidelinesText}`}>
          Example of applied spacers in the Image block Mobile Module. To visually see the spacers, turn on eye symbol
          inside
          <br />
          of "Utility / Spacers"
        </p>
      </div>
      <div className="vf-row">
        <div className="vf-col-lg-4">
          <img style={{ width: '100%' }} src={Group17} />
        </div>
      </div>
      <div className="row align-items-start">
        <h2>Distance Between modules - Desktop</h2>
        <p className={`${styles.guidelinesText}`}>
          Important to note is that all distances between individual modules are 88px ka the "Spacer - Extra Large" on
          desktop <br />
          Exception is for the modules named "media block" with image that hangs down,then use 2 of the 88px spacers.
        </p>
      </div>
      <div className="vf-row">
        <div className="vf-col-lg-12">
          <img style={{ width: '100%' }} src={desktopModule01} />
          <img style={{ width: '100%' }} src={desktopModule02} />
          <img style={{ width: '100%' }} src={desktopModule03} />
          <img style={{ width: '100%' }} src={desktopModule04} />
          <img style={{ width: '100%' }} src={desktopModule05} />
        </div>
      </div>
    </Fragment>
  );
};

export default Spacers;
