import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';
import styles from "./Typography.scss";

const BodyTextLarge = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <div className="vf-col">
          <h4>Body text large</h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <p className={styles.bodyTextLarge}>This is a large body copy. This is our main body text used on the website.</p>
        </div>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vattenfall Hall"
          fontWeight="Regular"
          fontSize="20px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall"
          fontWeight="Regular"
          fontSize="20px"
          lineHeight="36px"
        />
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default BodyTextLarge;
