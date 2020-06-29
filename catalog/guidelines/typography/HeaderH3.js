import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH3 = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <h3>Header H3</h3>
      </div>
      <div className="vf-row">
        <p>
          Header H3 is primarily used for tetiary sections inside content area.It is always set to Vattenfall Hall Bold.
        </p>
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
