import React, { Fragment } from 'react';
import Circle from './Circle';

const ColorTones = () => {
  return (
    <Fragment>
      <div className="vf-row">
        <Circle color={'#d1266c'} percentage="100%" />
        <Circle color={'#df6797'} percentage="70%" />
        <Circle color={'#e892b5'} percentage="50%" />
        <Circle color={'#f1bdd3'} percentage="30%" />
        <Circle color={'#fae9f1'} percentage="10%" />
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default ColorTones;
