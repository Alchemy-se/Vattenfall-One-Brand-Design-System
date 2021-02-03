import React from 'react'
import PageHeader from '../PageHeader'
import GuidelinesBlock from '../guidelinesBlock'
import Markdown from '../../lib/markdown'
import active from './active-state.md'

import DefaultDesktop from "./desktop/Default.js"
import DefaultMobile from "./mobile/Default.js"

const Navigation = () => {
  return (
    <React.Fragment>
      <PageHeader title='Navigation' />
          <section className='p-2 vf-border-top-gray-200'></section> 
          <Markdown source={active} />

          <DefaultDesktop />
          
          

    </React.Fragment>
  )
}

export default Navigation
