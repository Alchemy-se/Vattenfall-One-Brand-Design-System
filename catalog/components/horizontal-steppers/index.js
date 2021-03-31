import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown'
import Modals from '../../zendesk/modals/modals'
import PageHeader from '../../lib/pageHeader'

import desktopDefault from "./desktop-default/html/default.md"
import desktopNumbers from "./desktop-numbers/html/numbers.md"
import desktopAlternative from "./desktop-alternative/html/alternative.md"

import mobileDefault from "./mobile-default/html/default.md"


const markdown = desktopDefault + desktopNumbers + desktopAlternative + mobileDefault


const index = ({ uri }) => {
  return (
    <Fragment>
          <PageHeader title='Horizontal Steppers' />
          <Markdown source={markdown}/>
          {/* <Modals uri={uri}/> */}
    </Fragment>
  )
}

export default index
