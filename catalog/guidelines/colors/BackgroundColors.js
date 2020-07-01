import React, { Fragment } from 'react';
import Circle from './Circle';

const BackgroundColors = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <Circle color={'#FFFEE5'} colorName="Light Yellow" />
        <Circle color={'#EDF9F3'} colorName="Light Green" />
        <Circle color={'#EBF2F3'} colorName="Light Blue alt." />
        <Circle color={'#EDF1F6'} colorName="Light Blue" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
      <div className="vf-row">
        <Circle color={'#FEF0EA'} colorName="Light Red" />
        <Circle color={'#F2F2F2'} colorName="Light Grey" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default BackgroundColors;
