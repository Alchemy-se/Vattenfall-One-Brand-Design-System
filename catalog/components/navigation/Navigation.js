import React from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown'
import Modals from '../../zendesk/modals/modals'
import nav from './expanded/html/expanded.md'

const Navigation = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={'Navigation'} />
      <Markdown source={nav} />
      <Modals uri={uri}/>
    </React.Fragment>
  )
}

export default Navigation
