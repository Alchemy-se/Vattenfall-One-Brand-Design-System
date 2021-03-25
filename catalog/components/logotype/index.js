import React, { Fragment } from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown/index'
import Modals from '../../zendesk/modals/modals'
// Vattenfall
import vattenfallStackedGrey from './vattenfall-stacked-grey/html/stacked-grey.md'
import vattenfallStackedNegative from './vattenfall-stacked-negative/html/stacked-negative.md'
import vattenfallLinear from './vattenfall-linear-grey/html/linear-grey.md'
import vattenfallLinearNegative from './vattenfall-linear-negative/html/linear-negative.md'
// Continental
import continentalStacked from './incharge-continental-stacked/html/stacked-grey.md'
import continentalOneLine from './incharge-continental-one-line/html/one-line-grey.md'
import continentalLinear from './incharge-continental-linear/html/linear-grey.md'
// Nordic
import nordicStackedGrey from './incharge-nordic-stacked-grey/html/stacked-grey.md'
import nordicStackedBlack from './incharge-nordic-stacked-black/html/stacked-black.md'
import nordicStackedNegative from "./incharge-nordic-stacked-negative/html/stacked-negative.md"
import nordicStackedAllBlack from "./incharge-nordic-stacked-all-black/html/stacked-all-black.md"
import nordicStackedAllNegative from "./incharge-nordic-stacked-all-negative/html/stacked-all-negative.md"
import nordicLinearGrey from './incharge-nordic-linear-grey/html/linear-grey.md'
import nordicLinearBlack from './incharge-nordic-linear-black/html/linear-black.md'
import nordicLinearNegative from './incharge-nordic-linear-negative/html/linear-negative.md'
import nordicLinearAllBlack from './incharge-nordic-linear-all-black/html/linear-all-black.md'
import nordicLinearAllNegative from './incharge-nordic-linear-all-negative/html/linear-all-negative.md'
// Nordic Background
// import nordicLargeScreenBackground from "./incharge-nordic-large-screen-background/html/large-screen-background.md"
// import nordicMediumScreenBackground from "./incharge-nordic-medium-screen-background/html/medium-screen-background.md"
// import nordicSmallScreenBackground from "./incharge-nordic-small-screen-background/html/small-screen-background.md"

const markdown =
  vattenfallStackedGrey +
  vattenfallStackedNegative +
  vattenfallLinear +
  vattenfallLinearNegative +
  continentalStacked +
  continentalOneLine +
  continentalLinear +
  nordicStackedGrey +
  nordicStackedBlack +
  nordicStackedNegative +
  nordicStackedAllBlack +
  nordicStackedAllNegative +
  nordicLinearGrey +
  nordicLinearBlack +
  nordicLinearNegative +
  nordicLinearAllBlack +
  nordicLinearAllNegative
  // nordicLargeScreenBackground +
  // nordicMediumScreenBackground +
  // nordicSmallScreenBackground

const index = ({ uri }) => {
  return (
    <Fragment>
      <PageHeader title={'Logotypes'} />
      <Markdown source={markdown} />
      <Modals uri={uri} />
    </Fragment>
  )
}

export default index
