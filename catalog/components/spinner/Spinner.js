import React from 'react'
import { useScript } from '../../../helpers/hooks/useEffects/useScript'
import Markdown from '../../lib/markdown'
import Modals from '../../zendesk/modals/modals'
import PageHeader from '../../lib/pageHeader'
import spinner from './html/spinner/spinner.md'

const Spinner = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={'Spinner'} />
      <Markdown source={spinner} />
      <Modals uri={uri} />
    </React.Fragment>
  )
}

export default Spinner
