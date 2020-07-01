import React, { Fragment } from 'react';
import Circle from './Circle';

const SecondaryColors = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <Circle color={'#005C63'} colorName="Dark Green" />
        <Circle color={'#1E324F'} colorName="Dark Blue" />
        <Circle color={'#D1266B'} colorName="Pink" />
        <Circle color={'#85254B'} colorName="Dark Purple" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
      <div className="vf-row">
        <Circle color={'#3DC07C'} colorName="Green" />
        <Circle color={'#F93B18'} colorName="Red" />
        <Circle color={'#9B62C3'} colorName="Purple" />
        <div className="vf-col"></div>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default SecondaryColors;
