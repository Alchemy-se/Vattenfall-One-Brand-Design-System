import React, { Fragment } from 'react';
import PageHeader from '../pageHeader';

import Group4 from './Group4.png';
import ActionIcons from './Action Icons.png';
import InChargeIcons from './InCharge Icons.png';
import IdentificationIcons from './Identification Icons.png';
import NavigationIcons from './Navigation Icons.png';
import SmartHomeIcons from './Smart Home Icons.png';
import SocialMediaIcons from './Social Media Icons.png';

const Icons = () => {
  return (
    <Fragment>
      <PageHeader title="The Icons" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col px-5">
          <img src={Group4} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="row align-items-start">
        <h4>Action Icons</h4>
        <div className="vf-col">
          <img src={ActionIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="row align-items-start">
        <h4>InCharge Icons</h4>
        <div className="vf-col">
          <img src={InChargeIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="row align-items-start">
        <h4>Identification Icons</h4>
        <div className="vf-col">
          <img src={IdentificationIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="row align-items-start">
        <h4>Navigation Icons</h4>
        <div className="vf-col">
          <img src={NavigationIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="row align-items-start">
        <h4>Smart Home Icons</h4>
        <div className="vf-col">
          <img src={SmartHomeIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="row align-items-start">
        <h4>Social Media Icons</h4>
        <div className="vf-col">
          <img src={SocialMediaIcons} style={{ width: '100%' }} />
        </div>
      </div>
    </Fragment>
  );
};

export default Icons;
