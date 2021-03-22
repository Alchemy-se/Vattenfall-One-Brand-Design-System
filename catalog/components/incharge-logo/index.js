import React, { Fragment } from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown/index'
import Modals from '../../zendesk/modals/modals'
// Continental
import cStacked from './continental/html/stacked.md'
import cOneLine from './continental/html/one-line.md'
import cLinear from './continental/html/linear.md'
// Nordic
import nStacked from "./nordic/html/stacked.md"
import nLinear from "./nordic/html/linear.md"

const markdown = cStacked + cOneLine + cLinear + nStacked + nLinear

const index = ({ uri }) => {
  return (
    <Fragment>
      <PageHeader title={'InCharge Logotypes'} />
      <Markdown source={markdown} />
      <Modals uri={uri} />
    </Fragment>
  )
}

export default index
