import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

import blueBottom from './blueBottom.png';
import blueLeft from './blueLeft.png';
import blueRight from './blueRight.png';
import blueTop from './blueTop.png';
import greenBottom from './greenBottom.png';
import greenTop from './greenTop.png';
import greenLeft from './greenLeft.png';
import greenRight from './greenRight.png';
import redBottom from './redBottom.png';
import redLeft from './redLeft.png';
import redRight from './redRight.png';
import redTop from './redTop.png';
import yellowBottom from './yellowBottom.png';
import yellowLeft from './yellowLeft.png';
import yellowRight from './yellowRight.png';
import yellowTop from './yellowTop.png';

const TooltipsSolid = ({ title, label }) => {
  return (
    <Fragment>
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="vf-row">
        <Column title={'Bottom'}>
          <div className="py-3">
            <img src={blueBottom} />
          </div>
          <div className="py-3">
            <img src={greenBottom} />
          </div>
          <div className="py-3">
            <img src={redBottom} />
          </div>
          <div className="py-3">
            <img src={yellowBottom} />
          </div>
        </Column>
        <Column title={'Left'}>
          <div className="py-3">
            <img src={blueLeft} />
          </div>
          <div className="py-3">
            <img src={greenLeft} />
          </div>
          <div className="py-3">
            <img src={redLeft} />
          </div>
          <div className="py-3">
            <img src={yellowLeft} />
          </div>
        </Column>
        <Column title={'Right'}>
          <div className="py-3">
            <img src={blueRight} />
          </div>
          <div className="py-3">
            <img src={greenRight} />
          </div>
          <div className="py-3">
            <img src={redRight} />
          </div>
          <div className="py-3">
            <img src={yellowRight} />
          </div>
        </Column>
        <Column title={'Top'}>
          <div className="py-3">
            <img src={blueTop} />
          </div>
          <div className="py-3">
            <img src={greenTop} />
          </div>
          <div className="py-3">
            <img src={redTop} />
          </div>
          <div className="py-3">
            <img src={yellowTop} />
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default TooltipsSolid;
