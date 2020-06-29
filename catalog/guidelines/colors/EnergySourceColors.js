import React, { Fragment } from 'react';
import Circle from './Circle';

const EnergySourceColors = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <Circle color={'#2DA55D'} colorName="Hydro" />
        <Circle color={'#4FCC51'} colorName="Wind" />
        <Circle color={'#81E0A8'} colorName="Solar" />
        <Circle color={'#375E4E'} colorName="Biomass" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
      <div className="vf-row">
        <Circle color={'#E88A74'} colorName="Coal" />
        <Circle color={'#D85067'} colorName="Gas" />
        <Circle color={'#203D5D'} colorName="Nuclear" />
        <Circle color={'#A376CC'} colorName="District heating" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default EnergySourceColors;
