import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const blueBottom = '/img/guidelines/forms/blueBottom.png';
const blueLeft = '/img/guidelines/forms/blueLeft.png';
const blueRight = '/img/guidelines/forms/blueRight.png';
const blueTop = '/img/guidelines/forms/blueTop.png';
const greenBottom = '/img/guidelines/forms/greenBottom.png';
const greenTop = '/img/guidelines/forms/greenTop.png';
const greenLeft = '/img/guidelines/forms/greenLeft.png';
const greenRight = '/img/guidelines/forms/greenRight.png';
const redBottom = '/img/guidelines/forms/redBottom.png';
const redLeft = '/img/guidelines/forms/redLeft.png';
const redRight = '/img/guidelines/forms/redRight.png';
const redTop = '/img/guidelines/forms/redTop.png';
const yellowBottom = '/img/guidelines/forms/yellowBottom.png';
const yellowLeft = '/img/guidelines/forms/yellowLeft.png';
const yellowRight = '/img/guidelines/forms/yellowRight.png';
const yellowTop = '/img/guidelines/forms/yellowTop.png';

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
