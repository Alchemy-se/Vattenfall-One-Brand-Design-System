import React, { Fragment } from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown/index'
import Modals from '../../zendesk/modals/modals'

// MD FILES
// import continental from './continental/html/continental.md'
import nordic from './nordic/html/nordic.md'

// const markdown = continental + nordic

const index = ({ uri }) => {
  return (
    <Fragment>
      <PageHeader title={'InCharge Logotype'} />
      {/* <Markdown source={markdown} /> */}
      <Modals uri={uri} />
    </Fragment>
  )
}

export default index
