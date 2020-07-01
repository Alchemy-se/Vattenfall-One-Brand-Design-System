import React, { Fragment } from 'react';
import Circle from './Circle';

const Tertiary = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <Circle color={'#869BAD'} colorName="Ash Blue" />
        <Circle color={'#69788C'} colorName="Ash Blue Dark" />
        <Circle color={'#E6E6E6'} colorName="Lighter Grey" />
        <Circle color={'#CCCCCC'} colorName="Light Grey" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
      <div className="vf-row">
        <Circle color={'#999999'} colorName="Medioum Grey" />
        <Circle color={'#666666'} colorName="Dark Grey" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default Tertiary;
