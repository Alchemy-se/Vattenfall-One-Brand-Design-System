import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH1 = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <h1>Header H1</h1>
      </div>
      <div className="vf-row">
        <p>Header H1 is primarily used for MArquee/Hero sections. It is always set to Vattenfall Hall Display.</p>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vatenfall Hall"
          fontWeight="Bold"
          fontSize="28px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vatenfall Hall"
          fontWeight="Bold"
          fontSize="28px"
          lineHeight="36px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vatenfall Hall"
          fontWeight="Bold"
          fontSize="28px"
          lineHeight="36px"
        />
      </div>
    </Fragment>
  );
};

export default HeaderH1;
