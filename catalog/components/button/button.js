import React from "react";
import activeState from "./active-state/html/active-state.md";
import combiningButtons from './combining-buttons/html/combining-buttons.md'
import fullWidthButtons from './full-width-buttons/html/full-width-buttons.md'
import outlinedButtonsLarge from './outlined-buttons-large/html/outlined-buttons-large.md'
import outlinedButtonsMedium from './outlined-buttons-medium/html/outlined-buttons-medium.md'
import primaryButtonsLarge from './primary-buttons-large/html/primary-buttons-large.md'
import primaryButtonsMedium from './primary-buttons-medium/html/primary-buttons-medium.md'
import textButton from './text-button/html/text-button.md'
import textButtonSmall from './text-button-small/html/text-button-small.md'
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals/modals";
import inchargeNordicLarge from './incharge-buttons-nordic-large/html/incharge-buttons-nordic-large.md'
import inchargeNordicMedium from './incharge-buttons-nordic-medium/html/incharge-buttons-nordic-medium.md'

const markdown =
  primaryButtonsLarge +
  primaryButtonsMedium +
  outlinedButtonsLarge +
  outlinedButtonsMedium +
  textButton +
  textButtonSmall +
  combiningButtons +
  fullWidthButtons +
  activeState +
  inchargeNordicLarge +
  inchargeNordicMedium

const Button = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={'Buttons'} />
      <div className='vf-row'>
        <div style={{ marginLeft: '44px' }} className='vf-col-10'>
          <p>
            Buttons indicate there are actions on the page. Each of our button
            types have specific purposes. Individual button types are documented
            below, see guidelines to understand basic functionality for all of
            our different buttons.
          </p>
        </div>
      </div>
      <Markdown source={markdown} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Button;
