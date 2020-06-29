import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const BodyTextSmall = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <h4>Body text small</h4>
      </div>
      <div className="vf-row">
        <p className="vf-typo-p-secondary">
          This is body text small and is used in all of vattenfalls modules as bodttext.
        </p>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vattenfall Hall"
          fontWeight="Regular"
          fontSize="16px"
          lineHeight="28px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall"
          fontWeight="Regular"
          fontSize="16px"
          lineHeight="28px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vattenfall Hall"
          fontWeight="Regular"
          fontSize="16px"
          lineHeight="28px"
        />
      </div>
    </Fragment>
  );
};

export default BodyTextSmall;
