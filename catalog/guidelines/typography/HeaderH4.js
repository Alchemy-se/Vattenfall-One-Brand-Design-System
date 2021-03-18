import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH4 = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <div className="vf-col">
          <h4 className="use-in-toc">Header H4</h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <p>
            Primarily used for quarternary sections inside content area.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Desktop"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="22px"
          lineHeight="28px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="22px"
          lineHeight="28px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="18px"
          lineHeight="24px"
        />
      </div>
    </Fragment>
  );
};

export default HeaderH4;
