import React from "react";
import PageHeader from "./lib/pageHeader";
import NewsletterBox from "./lib/newsletterBox";
import styles from "./welcome.scss";

const Welcome = () => (
  <React.Fragment>
      <PageHeader title={"Digital Design System"}/>
      <div style={{ margin: '10px 20px 0 40px' }}>
        <div className="vf-row">
          <div className="vf-col vf-col-md-9">
            <p style={{ fontSize: '18px' }} className="">
             2 Vattenfall Design System unites products & services around a common visual language. It aims to reduce current Design Debt, accelerates the design process, and builds bridges between teams working in concert to bring unified products to life within set brand. Vattenfall Design System is created with aim to help the teams within Vattenfall to improve product quality, amplify production efficiency and enhance communication.
            </p>
            <div className="vf-row">
              <div className="vf-col" style={{maxWidth: "268px"}}>
                <a href="/get-started/design" className="vf-btn vf-btn--primary vf-btn--lg vf-mr-sm">Getting started</a>
              </div>
              <div className="vf-col" style={{maxWidth: "268px"}}>
                <a href="/examples" className="vf-btn vf-btn--secondary vf-btn--lg">View examples</a>
              </div>
            </div>
          </div>
          <div className={`vf-col-md-3 ${styles.signUpContainer}`}><NewsletterBox/></div>
        </div>
        <img src="/img/docs/illustration.png" style={{ position: 'fixed', right: 0, top: 0, zIndex: -1, height: '100%', objectFit: 'contain', maxWidth: '30%' }} />
        <div style={{width: '70%'}}>

        <h4>Brand Styleguide</h4>
        <p>
          Are you rather looking for the Vattenfall Brand Styleguide with information about how to use Vattenfalls logotype, colors and such?  Then you will find everything you need over at <a href="https://brandtoolbox.vattenfall.com/login/">Brand toolbox</a>.
        </p>
        </div>
      </div>
  </React.Fragment>
);

export default Welcome;
