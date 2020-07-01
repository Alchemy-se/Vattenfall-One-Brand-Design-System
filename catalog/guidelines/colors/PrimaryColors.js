import React, { Fragment } from 'react';
import Circle from './Circle';

const PrimaryColors = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <Circle color={'#FFDA00'} colorName="Solar Yellow" />
        <Circle color={'#2071B5'} colorName="Ocean Blue" />
        <Circle color={'#FFFFFF'} colorName="Aura White" border="1px solid #000000" />
      </div>
      <div className="vf-row">
        <Circle color={'#000000'} colorName="Coal Balck" />
        <Circle color={'#4E4B48'} colorName="Magnetic Gray" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default PrimaryColors;
