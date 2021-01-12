import React, { Fragment } from 'react';
import PageHeader from "../pageHeader";
import styles from "../../get-started/designers/index.scss";

const IntroductionComponents = () => {
  return (
    <Fragment>
      <PageHeader title={"Introduction"} />

      <div className={styles.container}>
        <span>The Components section in this Digital Design System is here to help guide developers on any code requirements or questions to do with usage of code assets across all digital touch-points.</span>
        <h3 style={{marginTop: '48px'}}>New asset request</h3>
        <span >If you need a new asset, want to report an issue or submit a general suggestion on the Vattenfall digital
          design
          or code assets submit your details below and we will get back to you as soon as we can.</span>
        <a style={{ display: 'block', marginTop: '24px' }} href="/contact/new-request" className="vf-link-with-arrow">
        Give us feedback
        </a>
      </div>
    </Fragment>
  );
};

export default IntroductionComponents;
