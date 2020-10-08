import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const blueBottomOutlined = '/img/guidelines/forms/blueBottomOutlined.png';
const greenBottomOutlined = '/img/guidelines/forms/greenBottomOutlined.png';
const redBottomOutlined = '/img/guidelines/forms/redBottomOutlined.png';
const blueLeftOutlined = '/img/guidelines/forms/blueLeftOutlined.png';
const greenLeftOutlined = '/img/guidelines/forms/greenLeftOutlined.png';
const redLeftOutlined = '/img/guidelines/forms/redLeftOutlined.png';
const blueRightOutlined = '/img/guidelines/forms/blueRightOutlined.png';
const greenRightOutlined = '/img/guidelines/forms/greenRightOutlined.png';
const redRightOutlined = '/img/guidelines/forms/redRightOutlined.png';
const blueTopOutlined = '/img/guidelines/forms/blueTopOutlined.png';
const greenTopOutlined = '/img/guidelines/forms/greenTopOutlined.png';
const redTopOutlined = '/img/guidelines/forms/redTopOutlined.png';

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
