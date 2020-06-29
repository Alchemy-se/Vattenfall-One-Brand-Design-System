import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH4 = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <h4>Header H4</h4>
      </div>
      <div className="vf-row">
        <p>
          Header H4 is primarily used for quartrnary sections inside content area. It is always set to Vattenfall Hall
          Bold.
        </p>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="24px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall"
          fontWeight="Bold"
          fontSize="24px"
          lineHeight="36px"
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
