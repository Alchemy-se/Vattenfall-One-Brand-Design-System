import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const BodyTextSmall = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <div className="vf-col">
          <h4>Intro in caps</h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <p style={{fontSize: "20px"}}>
            <strong className="vf-intro-in-caps">This is our </strong>
            intro in caps and is used on the three first words together with body text large.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="16px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="16px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vattenfall Hall"
          fontWeight="Regular"
          fontSize="12px"
          lineHeight="22px"
        />
      </div>
    </Fragment>
  );
};

export default BodyTextSmall;
