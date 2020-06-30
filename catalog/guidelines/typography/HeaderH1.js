import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH1 = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <div className="vf-col">
          <h1>Header H1</h1>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <p>Should always be used for titles of top-level sections of a screen. Primarily used for Marquee/Hero sections.</p>
        </div>
      </div>
      <div className="vf-row">
        <ElementSpeifications
          screenSize="Dektop"
          fontName="Vatenfall Hall Display"
          fontWeight="Bold"
          fontSize="72px"
          lineHeight="84px"
        />
        <ElementSpeifications
          screenSize="Tablet"
          fontName="Vatenfall Hall Display"
          fontWeight="Bold"
          fontSize="60px"
          lineHeight="75px"
        />
        <ElementSpeifications
          screenSize="Mobile"
          fontName="Vatenfall Hall Display"
          fontWeight="Bold"
          fontSize="44px"
          lineHeight="48px"
        />
      </div>
    </Fragment>
  );
};

export default HeaderH1;
