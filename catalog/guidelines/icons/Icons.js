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
        <div className="vf-col">
          <p>
            The icons mirror our typeface – engineered and human, confident and determined.
            <br/>
            <br/>
            They are created to be simple, yet powerful, representations to ease and help understanding of our services, products and  ideas. Always used in moderation, and never animated, the icons can together with simple images create more clarity and messaging power than illustrations.
            <br/>
            <br/>
            Icons should always be in black when placed on a white or grey background. The same applies when icons are placed on other light background colours.
            <br/>
            <br/>
            When placed on an image – icons should primarily be white, but depending on the image they are also allowed to be black.
            <br/>
            <br/>
            When icons are in a group, use them in the same size to ensure that they have the same line weight
            <br/>
            <br/>
            – Do not use icons in colour.
            <br/>
            – Do not use outlined icons.
            <br/>
            – Do not alter or distort the icons.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col px-5">
          <img src={Group4} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="row align-items-start">
        <h4 className="use-in-toc">Action Icons</h4>
        <p>Action icons are used to signal and describe interaction.</p>
        <div className="vf-col vf-p-0">
          <img src={ActionIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="vf-mt-md" />
      <div className="row align-items-start">
        <h4 className="use-in-toc">InCharge Icons</h4>
        <p>These are specific Icons for InCharge.</p>
        <div className="vf-col vf-p-0">
          <img src={InChargeIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="vf-mt-md" />
      <div className="row align-items-start">
        <h4 className="use-in-toc">Identification Icons</h4>
        <p>Identification icons are used to identify a service or product.</p>
        <div className="vf-col vf-p-0">
          <img src={IdentificationIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="vf-mt-md" />
      <div className="row align-items-start">
        <h4 className="use-in-toc">Navigation Icons</h4>
        <p>Navigation icons are used as part of the UI.</p>
        <div className="vf-col vf-p-0">
          <img src={NavigationIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="vf-mt-md" />
      <div className="row align-items-start">
        <h4 className="use-in-toc">Smart Home Icons</h4>
        <p>Smart home icons are used to identify products and services for the home.</p>
        <div className="vf-col vf-p-0">
          <img src={SmartHomeIcons} style={{ width: '100%' }} />
        </div>
      </div>
      <div className="vf-mt-md" />
      <div className="row align-items-start">
        <h4 className="use-in-toc">Social Media Icons</h4>
        <p>Social media icons do not adhere to our icon style since they are logotypes and symbol of other platforms and services.</p>
        <div className="vf-col vf-p-0">
          <img src={SocialMediaIcons} style={{ width: '100%' }} />
        </div>
      </div>
    </Fragment>
  );
};

export default Icons;
