import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

import blueBottomOutlined from './blueBottomOutlined.png';
import greenBottomOutlined from './greenBottomOutlined.png';
import redBottomOutlined from './redBottomOutlined.png';
import blueLeftOutlined from './blueLeftOutlined.png';
import greenLeftOutlined from './greenLeftOutlined.png';
import redLeftOutlined from './redLeftOutlined.png';
import blueRightOutlined from './blueRightOutlined.png';
import greenRightOutlined from './greenRightOutlined.png';
import redRightOutlined from './redRightOutlined.png';
import blueTopOutlined from './blueTopOutlined.png';
import greenTopOutlined from './greenTopOutlined.png';
import redTopOutlined from './redTopOutlined.png';

const TooltipsOutlined = ({ title, label }) => {
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
            <img src={blueBottomOutlined} />
          </div>
          <div className="py-3">
            <img src={greenBottomOutlined} />
          </div>
          <div className="py-3">
            <img src={redBottomOutlined} />
          </div>
        </Column>
        <Column title={'Left'}>
          <div className="py-3">
            <img src={blueLeftOutlined} />
          </div>
          <div className="py-3">
            <img src={greenLeftOutlined} />
          </div>
          <div className="py-3">
            <img src={redLeftOutlined} />
          </div>
        </Column>
        <Column title={'Right'}>
          <div className="py-3">
            <img src={blueRightOutlined} />
          </div>
          <div className="py-3">
            <img src={greenRightOutlined} />
          </div>
          <div className="py-3">
            <img src={redRightOutlined} />
          </div>
        </Column>
        <Column title={'Top'}>
          <div className="py-3">
            <img src={blueTopOutlined} />
          </div>
          <div className="py-3">
            <img src={greenTopOutlined} />
          </div>
          <div className="py-3">
            <img src={redTopOutlined} />
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default TooltipsOutlined;
