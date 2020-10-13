import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH3 = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <div className="vf-col">
          <h3 className="use-in-toc">Header H3</h3>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <p>
            Primarily used for tetriary sections inside content area.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="28px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="28px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="24px"
          lineHeight="28px"
        />
      </div>
    </Fragment>
  );
};

export default HeaderH3;
