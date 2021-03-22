import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown/index'
import PageHeader from '../../lib/pageHeader'
import Modals from '../../zendesk/modals/modals'
import radio from './radio/html/radio.md'
import cSmall from "./checkbox/html/small.md"
import cMedium from "./checkbox/html/medium.md"
import cMedium2Line from "./checkbox/html/medium-two-line.md"
import cMedium2LineIcon from "./checkbox/html/medium-two-line-icon.md"
import cLarge from "./checkbox/html/large.md"

const md = cSmall + cMedium + cMedium2Line + cMedium2LineIcon + cLarge

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
