import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown/index'
import PageHeader from '../../lib/pageHeader'
import Modals from '../../zendesk/modals/modals'
import radio from './radio/html/radio.md'
import checkbox from "./checkbox/html/checkbox.md"
import link from "./link/html/link.md"

const md = radio + checkbox + link

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
