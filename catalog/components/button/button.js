import React, {Component} from "react";
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

const markdown = primaryButtonsLarge + primaryButtonsMedium + outlinedButtonsLarge + outlinedButtonsMedium
+ textButton + textButtonSmall + buttonCombinations + fullWidthButtons + activeState

export default class Button extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Button"}/>
				<Markdown source={markdown} />
			</React.Fragment>
		)
	}
};
