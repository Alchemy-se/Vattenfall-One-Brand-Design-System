import React from 'react'
import Markdown from '../../lib/markdown'
import Modals from '../../zendesk/modals/modals'
import PageHeader from '../../lib/pageHeader'
import spinner from './spinner/html/spinner.md'
import text from "./spinner/html/text.md"

const md = text + spinner

const Spinner = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={'Spinner'} />
      <Markdown source={md} scriptUrl={'/js/spinner.min.js'} />
      <Modals uri={uri} />
    </React.Fragment>
  )
}

export default Spinner
