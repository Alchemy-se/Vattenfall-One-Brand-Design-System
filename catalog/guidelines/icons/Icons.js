import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import Markdown from '../../lib/markdown'
import Action from '../../components/icons/action-icons/html/action-icons.md'
import Identification from '../../components/icons/identification-icons/html/identification-icons.md'
import Navigation from '../../components/icons/navigation-icons/html/navigation-icons.md'
import SmartHome from '../../components/icons/smart-home-icons/html/smart-home-icons.md'
import SocialMedia from '../../components/icons/socialmedia-icons/html/socialmedia-icons.md'
import GuidelinesBlock from '../guidelinesBlock'
import iconsStyles from './Icons.scss'
import SquareIconBlock from './squareIconBlock'
import IconsIntro from './IconsIntro'
import ThreeBigIcons from "./ThreeBigIcons"

// InCharge
import InCharge from '../../components/icons/Incharge-icons/html/incharge-icons.md'
import InChargePortalAndApp from './InChargePortalAndApp'


const Group4 = '/img/guidelines/icons/Group4.png'
const WaterBackground = '/img/guidelines/icons/water.png'
const DoNotOne = '/img/guidelines/icons/DoNotOne.png'
const DoNotTwo = '/img/guidelines/icons/DoNotTwo.png'
const DoNotThree = '/img/guidelines/icons/DoNotThree.png'
const DoNotFour = '/img/guidelines/icons/DoNotFour.png'

const inChargeChargingFast = '/img/guidelines/icons/incharge-charging-fast.svg'
const inChargeLocation = "/img/guidelines/icons/incharge-location.svg"
const inChargeType2 = "/img/guidelines/icons/incharge-type2.svg"

const editMd = mdText => {
  const hideSourceCode = mdText.replace('showSource: true', 'showSource: false')
  const removeH3 = hideSourceCode.substring(hideSourceCode.indexOf('\n') + 1)
  return removeH3
}

const Icons = () => {
  return (
    <Fragment>
      <PageHeader title='Icons' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <IconsIntro />
      <div className='vf-row'>
        <div className='vf-col px-5'>
          <img src={Group4} style={{ width: '100%', marginTop: '28px' }} />
        </div>
      </div>
      <GuidelinesBlock
        title='Icon Categories'
        text='There are 6 different categories of icons: Navigation, Action, Identification, Social media, Smart home and InCharge.'
      >
        <div
          className={`vf-row ${iconsStyles.iconGuidelineLargeIconRowContainer}`}
        >
          <SquareIconBlock
            title='Navigation'
            text='Navigation icons are used as part of the UI.'
            iconToolTip='vf-icon-more'
          />
          <SquareIconBlock
            title='Action'
            text='Action icons are used to signal and describe interaction.'
            iconToolTip='vf-icon-shop'
          />
          <SquareIconBlock
            title='Identification'
            text='Identification icons are used to identify a service or product.'
            iconToolTip='vf-icon-sun'
          />
        </div>
        <div
          className={`vf-row ${iconsStyles.iconGuidelineLargeIconRowContainer}`}
        >
          <SquareIconBlock
            title='Social media'
            text='Social media icons do not adhere to our icon style since they are logotypes and symbol of other platforms and services.'
            iconToolTip='vf-icon-twitter'
          />
          <SquareIconBlock
            title='Smart home'
            text='Smart home icons are used to identify products and services for the home.'
            iconToolTip='vf-icon-router'
          />
          <SquareIconBlock
            title='InCharge'
            text="InCharge icons are specific icons created for the InCharge brand's services and needs"
            iconToolTip='vf-icon-private-charging'
          />
        </div>
      </GuidelinesBlock>
      <GuidelinesBlock title='Usage'>
        <div
          className={`vf-row ${iconsStyles.iconGuidelineLargeIconRowContainer}`}
        >
          <SquareIconBlock
            text='Icons should always be in black when placed on a white or grey background.'
            iconToolTip='vf-icon-hydro'
          />
          <SquareIconBlock
            text='The same applies when icons are placed on other light background colours.'
            iconToolTip='vf-icon-hydro'
            pinkBg
          />
          <SquareIconBlock
            text='When placed on an image - icons should primarily be white, but depending on the image could also allowed to be black to make the icon legible.'
            iconToolTip='vf-icon-hydro'
            bgImg={WaterBackground}
          />
        </div>
        <div
          className={`vf-row ${iconsStyles.iconGuidelineLargeIconRowContainer}`}
        >
          <SquareIconBlock
            text='When icons are in a group, they should be used in the same size to ensure that they have the same line weight.'
            bgImg={DoNotOne}
          />
          <SquareIconBlock
            text='Do not use icons in colour.'
            bgImg={DoNotTwo}
          />
          <SquareIconBlock
            text='Do not use icons in colour.'
            bgImg={DoNotThree}
          />
          <SquareIconBlock
            text='Do not alter or distort the icons.'
            bgImg={DoNotFour}
          />
        </div>
      </GuidelinesBlock>
      <GuidelinesBlock
        title='Action Icons'
        text='Action icons are used to signal and describe interaction.'
      >
        <Markdown source={editMd(Action)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='InCharge Icons'
        text='These are specific Icons for InCharge.'
      >
        <Markdown source={editMd(InCharge)} />
      </GuidelinesBlock>

      <GuidelinesBlock
        title='InCharge Icons for Portal and App'
        text='These Icon are Specific for InCharge and only to be used for Incharge Portal or Incharge App'
      ></GuidelinesBlock>

      <ThreeBigIcons
        src1={inChargeChargingFast}
        src2={inChargeLocation}
        src3={inChargeType2}
      />

      <InChargePortalAndApp />

      <section className='p-2 vf-border-top-gray-200'></section>
      
      <GuidelinesBlock
        title='Identification Icons'
        text='Identification icons are used to identify a service or product.'
      >
        <Markdown source={editMd(Identification)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='Navigation Icons'
        text='Navigation icons are used as part of the UI.'
      >
        <Markdown source={editMd(Navigation)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='Smart Home Icons'
        text='Smart home icons are used to identify products and services for the home.'
      >
        <Markdown source={editMd(SmartHome)} />
      </GuidelinesBlock>
      <GuidelinesBlock
        title='Social Media Icons'
        text='Social media icons do not adhere to our icon style since they are logotypes and symbols of external platforms and services.'
      >
        <Markdown source={editMd(SocialMedia)} />
      </GuidelinesBlock>
      <GuidelinesBlock title='Design Sources'>
        <a href='#' className='vf-link-with-arrow'>
          View on Abstract
        </a>
      </GuidelinesBlock>
    </Fragment>
  )
}

export default Icons
