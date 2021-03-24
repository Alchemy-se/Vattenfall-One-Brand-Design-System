import React, { Fragment } from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown/index'
import Modals from '../../zendesk/modals/modals'
// vattenfall
import vStacked from "./vattenfall-stacked/html/stacked.md"
import vStackedNegative from "./vattenfall-stacked-negative/html/stacked-negative.md"
import vLinear from "./vattenfall-linear/html/linear.md"
import vLinearNegative from "./vattenfall-linear-negative/html/linear-negative.md"
// Continental
import cStacked from './incharge-continental-stacked/html/stacked.md'
import cOneLine from './incharge-continental-one-line/html/one-line.md'
import cLinear from './incharge-continental-linear/html/linear.md'
// Nordic
import nStacked from "./incharge-nordic-stacked/html/stacked.md"
import nLinear from './incharge-nordic-linear/html/linear.md'

const markdown = vStacked + vLinear + cStacked + cOneLine + cLinear + nStacked + nLinear

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
