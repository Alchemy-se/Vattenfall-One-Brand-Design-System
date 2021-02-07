import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import GuidelinesBlock from '../guidelinesBlock'
import Markdown from '../../lib/markdown'

import defaultMenu from '../../components/navigation/default/html/default.md'
import search from '../../components/navigation/search/html/search.md'
import expanded from '../../components/navigation/expanded/html/expanded.md'
import scroll1 from '../../components/navigation/scroll-level-1/html/scroll-level-1.md'
import scroll2 from '../../components/navigation/scroll-level-2/html/scroll-level-2.md'
import scroll3 from '../../components/navigation/scroll-level-3/html/scroll-level-3.md'
import responsive from '../../components/navigation/responsive/html/responsive.md'

const md =
  defaultMenu + search + expanded + scroll1 + scroll2 + scroll3 + responsive

const Navigation = () => {
  return (
    <Fragment>
      <PageHeader title='Navigation' />
      <Markdown source={md} />
    </Fragment>
  )
}

export default Navigation
