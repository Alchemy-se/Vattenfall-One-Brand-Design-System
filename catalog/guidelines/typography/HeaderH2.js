import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH2 = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <h2>Header H2</h2>
      </div>
      <div className="vf-row">
        <p>
          Header H2 is primarily used for secondary sections inside of content area. It is always set to Vattenfall Hall
          Display.
        </p>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vattenfall Hall Display"
          fontWeight="Bold"
          fontSize="72px"
          lineHeight="84px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vattenfall Hall Display"
          fontWeight="Bold"
          fontSize="60px"
          lineHeight="75px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vattenfall Hall Display"
          fontWeight="Bold"
          fontSize="36px"
          lineHeight="40px"
        />
      </div>
    </Fragment>
  );
};

export default HeaderH2;
