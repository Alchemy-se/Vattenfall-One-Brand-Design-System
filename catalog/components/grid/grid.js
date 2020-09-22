import React, {Component} from "react";


import howItWorks from './how-it-works/html/how-it-works.md'
import equalWidth from './equal-width/html/equal-width.md'
import settingOneColumnWidth from './setting-one-column-width/html/setting-one-column-width.md'
import variableWithContent from './variable-with-content/html/variable-with-content.md'
import equalWidthMultiRow from './equal-width-multi-row/html/equal-width-multi-row.md'
import allBreakpoints from './all-breakpoints/html/all-breakpoints.md'
import stackedToHorizontal from './stacked-to-horizontal/html/stacked-to-horizontal.md'
import mixAndMatch from './mix-and-match/html/mix-and-match.md'
import gutters from './gutters/html/gutters.md'
import verticalAlignment from './vertical-alignment/html/vertical-alignment.md'
import horizontalAlignment from './horizontal-alignment/html/horizontal-alignment.md'
import noGutters from './no-gutters/html/no-gutters.md'
import columnWrapping from './column-wrapping/html/column-wrapping.md'
import columnBreaks from './column-breaks/html/column-breaks.md'
import orderClasses from './order-classes/html/order-classes.md'
import offsetClasses from './offset-classes/html/offset-classes.md'
import marginUtils from './margin-utilities/html/margin-utilities.md'
import standardContainer from './standard-container/html/standard-container.md'
import tightContainer from './tight-container/html/tight-container.md'
import bleedContainer from './bleed-container/html/bleed-container.md'

const markdown = howItWorks + equalWidth + settingOneColumnWidth + variableWithContent + equalWidthMultiRow
+ allBreakpoints + stackedToHorizontal + mixAndMatch + gutters + verticalAlignment + horizontalAlignment + noGutters
+ columnWrapping + columnBreaks + orderClasses + offsetClasses + marginUtils + standardContainer
+ tightContainer + bleedContainer







import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";

export default class Grid extends Component {
	render() {
		return (
			<React.Fragment>
				<PageHeader title={"Grid"}/>
				<Markdown source={markdown} />
			</React.Fragment>
		)
	}
};
