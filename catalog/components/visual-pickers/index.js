import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown/index'
import PageHeader from '../../lib/pageHeader'
import Modals from '../../zendesk/modals/modals'

import standard from './standard/html/standard.md'

const index = ({ uri }) => {
  return (
    <Fragment>
      <PageHeader title={'Visual Pickers'} />
      <Markdown source={standard} />
      <Modals uri={uri} />
    </Fragment>
  )
}

export default index
