import React from "react";
import NewsletterBox from "./lib/newsletterBox";
import styles from "./welcome.scss";

const Welcome = () => {

  return (
    <React.Fragment>
      <div>

        <div className={styles.startPageHero}>
          <div className={`${styles.signUpContainer}`}><NewsletterBox /></div>
          <div className={styles.videoContainer}>
            <video autoPlay loop muted>
              <source src="/img/example-startpage/hero-video-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <h1>
            Digital Design System
          </h1>

          <img className={styles.logo} src="/img/vf-logo-vertical.svg" />
        </div>

        <div className={styles.bodyContainer}>
          <div className={styles.introText}>
            <div>Vattenfall Design System unites products & services around a common visual language. It aims to reduce
              current Design Debt, accelerates the design process, and builds bridges between teams working in concert
              to
              bring unified products to life within set brand.
            </div>
            <div>Vattenfall Design System is created with aim to help the teams within Vattenfall to improve product
              quality, amplify production efficiency and enhance communication.

            </div>
          </div>

          <div className={styles.buttonContainer}>
            <a href="/get-started/introduction" className="vf-btn vf-btn--lg vf-btn--primary">Getting started</a>
            {/* <button type="button" className="vf-btn  vf-btn--outline-secondary">Blue Button</button>*/}

          </div>

          <div className={styles.border} />
          <div className={styles.brandStyleGuideContainer}>
            <div className={styles.header}>Brand Styleguide</div>
            <div className={styles.text}>
              Are you rather looking for the Vattenfall Brand Styleguide with information about how to use Vattenfalls
              logotype, colors and such? Then you will find everything you need over at <a
              href="https://brandtoolbox.vattenfall.com/login/">Brand toolbox</a>.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;

