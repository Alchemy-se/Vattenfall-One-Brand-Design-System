import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import Markdown from "../../lib/markdown";
import Action from '../../components/icons/action-icons/html/action-icons.md';
import InCharge from '../../components/icons/incharge-icons/html/incharge-icons.md';
import Identification from '../../components/icons/identification-icons/html/identification-icons.md';
import Navigation from '../../components/icons/navigation-icons/html/navigation-icons.md';
import SmartHome from '../../components/icons/smart-home-icons/html/smart-home-icons.md';
import SocialMedia from '../../components/icons/socialmedia-icons/html/socialmedia-icons.md';
import IconBlock from './iconBlock';


const Group4 = '/img/guidelines/icons/Group4.png';
// const ActionIcons = '/img/guidelines/icons/ActionIcons.png';
// const InChargeIcons = '/img/guidelines/icons/InChargeIcons.png';
// const IdentificationIcons = '/img/guidelines/icons/IdentificationIcons.png';
// const NavigationIcons = '/img/guidelines/icons/NavigationIcons.png';
// const SmartHomeIcons = '/img/guidelines/icons/SmartHomeIcons.png';
// const SocialMediaIcons = '/img/guidelines/icons/SocialMediaIcons.png';

  const editMd = (mdText) => {
    const hideSourceCode = mdText.replace("showSource: true", "showSource: false");
    const removeH3 = hideSourceCode.substring(hideSourceCode.indexOf("\n") + 1);
    return removeH3;
  }


const Icons = () => {
  return (
    <Fragment>
      <PageHeader title="The Icons" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col-12" style={{lineHeight: "44px"}}>
          <p>
            The icons mirror our typeface – engineered and human, confident and determined.
          </p>
          <p>
            They are created to be simple, yet powerful, representations to ease and help understanding of our services, products and  ideas. Always used in moderation, and never animated, the icons can together with simple images create more clarity and messaging power than illustrations.
            Icons should always be in black when placed on a white or grey background. The same applies when icons are placed on other light background colors.
          </p>
          <p>
            When placed on an image - icons should primarily be white, but depending on the image they are also allowed to be black.
          </p>
          <p>
            When icons are in a group, use them in the same size to ensure that they have the same line weight
          </p>
          <ul style={{listStyleType: "none", paddingLeft: "0"}}>
          <li>
            - Do not use icons in color.
          </li>
          <li>
            - Do not use outlined icons.
          </li>
          <li>
            - Do not alter or distort the icons.
          </li>
          </ul>       
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col px-5">
          <img src={Group4} style={{ width: '100%' }} />
        </div>
      </div>
      <IconBlock 
        title="Action Icons" 
        text="Action icons are used to signal and describe interaction."
      >
        <Markdown source={editMd(Action)} />
      </IconBlock>
      <IconBlock 
        title="InCharge Icons" 
        text="These are specific Icons for InCharge."
      >
        <Markdown source={editMd(InCharge)} />
      </IconBlock>
      <IconBlock 
        title="Identification Icons" 
        text="Identification icons are used to identify a service or product."
      >
        <Markdown source={editMd(Identification)} />
      </IconBlock>
      <IconBlock 
        title="Navigation Icons" 
        text="Navigation icons are used as part of the UI."
      >
        <Markdown source={editMd(Navigation)} />
      </IconBlock>
      <IconBlock 
        title="Smart Home Icons" 
        text="Smart home icons are used to identify products and services for the home."
      >
        <Markdown source={editMd(SmartHome)} />
      </IconBlock>
      <IconBlock 
        title="Social Media Icons" 
        text="Social media icons do not adhere to our icon style since they are logotypes and symbol of other platforms and services."
      >
        <Markdown source={editMd(SocialMedia)} />
      </IconBlock>     
    </Fragment>
  );
};

export default Icons;
