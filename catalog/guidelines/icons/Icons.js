import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';

const Group4 = '/img/guidelines/icons/Group4.png';
const ActionIcons = '/img/guidelines/icons/ActionIcons.png';
const InChargeIcons = '/img/guidelines/icons/InChargeIcons.png';
const IdentificationIcons = '/img/guidelines/icons/IdentificationIcons.png';
const NavigationIcons = '/img/guidelines/icons/NavigationIcons.png';
const SmartHomeIcons = '/img/guidelines/icons/SmartHomeIcons.png';
const SocialMediaIcons = '/img/guidelines/icons/SocialMediaIcons.png';

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
