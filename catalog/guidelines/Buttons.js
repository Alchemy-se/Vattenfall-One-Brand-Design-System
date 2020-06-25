import React, { Fragment } from 'react';
import PageHeader from '../lib/pageHeader';
import Column from "./Column";
import styles from '../Guidelines.scss';

import Description from './Description';

const Button = () => {
  return (
    <Fragment>
      <PageHeader title="Buttons" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description />
      <div className="vf-row">
        <div className="vf-col">
          <h3>Yellow</h3>
        </div>
        <div className="vf-col">
          <h3>&nbsp;</h3>
        </div>
        <div className="vf-col">
          <h3>&nbsp;</h3>
        </div>
        <div className="vf-col">
          <h3>&nbsp;</h3>
        </div>
      </div>
        <div className="vf-row">
            <Column title={"Default"}>
                <button type="button" className="vf-btn vf-btn--lg vf-btn--primary">Yellow button</button>
                <div className="pb-2"/>
                <button type="button" className="vf-btn vf-btn--md vf-btn--primary">Yellow button</button>
            </Column>
            <Column title={"Hover"}>
                <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonHover}`}>Yellow button</button>
                <div className="pb-2"/>
                <button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonHover}`}>Yellow button</button>
            </Column>
            <Column title={"Active"}>
                <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonActive}`}>Yellow button</button>
                <div className="pb-2"/>
                <button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonActive}`}>Yellow button</button>
            </Column>
            <Column title={"Disabled"}>
                <button type="button" className="vf-btn vf-btn--lg vf-btn--primary" disabled>Yellow button</button>
                <div className="pb-2"/>
                <button type="button" className="vf-btn vf-btn--md vf-btn--primary" disabled>Yellow button</button>
            </Column>
        </div>
      <section className="p-2 vf-border-bottom-gray-200"></section>
    </Fragment>
  );
};

export default Button;
