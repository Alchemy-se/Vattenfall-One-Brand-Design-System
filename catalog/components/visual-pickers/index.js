import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown/index'
import PageHeader from '../../lib/pageHeader'
import Modals from '../../zendesk/modals/modals'
import singleSmall from './single-select-small/html/small.md'
import singleMedium from "./single-select-medium/html/medium.md"
import singleMedium2Line from "./single-select-medium-two-line/html/medium-two-line.md"
import singleMedium2LineIcon from "./single-select-medium-two-line-icon/html/medium-two-line-icon.md"
import singleLarge from "./single-select-large/html/large.md"
import multiSmall from "./multi-select-small/html/small.md"
import multiMedium from "./multi-select-medium/html/medium.md"
import multiMedium2Line from "./multi-select-medium-two-line/html/medium-two-line.md"
import multiMedium2LineIcon from "./multi-select-medium-two-line-icon/html/medium-two-line-icon.md"
import multiLarge from "./multi-select-large/html/large.md"

const md = singleSmall + singleMedium + singleMedium2Line + singleMedium2LineIcon + singleLarge + multiSmall + multiMedium + multiMedium2Line + multiMedium2LineIcon + multiLarge

const index = ({ uri }) => {
  return (
    <Fragment>
      <PageHeader title={'Visual Pickers'} />
      <Markdown source={md} />
      <Modals uri={uri} />
    </Fragment>
  )
}

export default index
