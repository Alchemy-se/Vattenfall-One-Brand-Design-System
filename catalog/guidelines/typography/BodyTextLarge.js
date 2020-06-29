import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const BodyTextLarge = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <h4>Body text large</h4>
      </div>
      <div className="vf-row">
        <p>This is a large body copy. This is our main body text used on the website.</p>
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
