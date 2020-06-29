import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const PreambleText = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <h4>Preamble Text</h4>
      </div>
      <div className="vf-row">
        <p className="vf-preamble">
          This is preamble copy. It is used for introducing the content <br />
          after the Headline.
        </p>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vattenfall Hall"
          fontWeight="Medium"
          fontSize="24px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall"
          fontWeight="Medium"
          fontSize="24px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vattenfall Hall"
          fontWeight="Medium"
          fontSize="20px"
          lineHeight="28px"
        />
      </div>
    </Fragment>
  );
};

export default PreambleText;
