import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const PreambleText = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <div className="vf-col">
          <h4 className="use-in-toc">Preamble Text</h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <p className="vf-preamble">
            This is Preamble copy. Used for introducing the content after a Headline.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Desktop"
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
