import React from "react";
import activeState from "./active-state/html/active-state.md";
import buttonCombinations from './button-combinations/html/button-combinations.md'
import fullWidthButtons from './full-width-buttons/html/full-width-buttons.md'
import outlinedButtonsLarge from './outlined-buttons-large/html/outlined-buttons-large.md'
import outlinedButtonsMedium from './outlined-buttons-medium/html/outlined-buttons-medium.md'
import primaryButtonsLarge from './primary-buttons-large/html/primary-buttons-large.md'
import primaryButtonsMedium from './primary-buttons-medium/html/primary-buttons-medium.md'
import textButton from './text-button/html/text-button.md'
import textButtonSmall from './text-button-small/html/text-button-small.md'
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals";

const markdown = primaryButtonsLarge + primaryButtonsMedium + outlinedButtonsLarge + outlinedButtonsMedium
  + textButton + textButtonSmall + buttonCombinations + fullWidthButtons + activeState

const Button = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Button"} />
      <div className="vf-row">
        <div style={{marginLeft:"44px"}} className="vf-col-10">
        <p>Buttons indicate actions on the page. Each of our button types have specific purposes that are used consistently. Individual button types are documented below, see guidelines to help you understand basic functionality for all of our buttons.</p>
        </div>
      </div>
      <Markdown source={markdown} />
			<Modals uri={uri} />
    </React.Fragment>
  )
};

export default Button;
