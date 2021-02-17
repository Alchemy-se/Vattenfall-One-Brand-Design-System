import React from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown'
import Modals from '../../zendesk/modals/modals'

import intro from './default/html/intro.md'
import defaultMenuText from './default/html/text.md'
import defaultmenu from './default/html/default.md'

import searchText from './search/html/text.md'
import search from './search/html/search.md'

import expandedText from './expanded/html/text.md'
import expanded from './expanded/html/expanded.md'

import scroll1Text from './scroll-level-1/html/text.md'
import scroll1 from './scroll-level-1/html/scroll-level-1.md'

import scroll2Text from './scroll-level-2/html/text.md'
import scroll2 from './scroll-level-2/html/scroll-level-2.md'

import scroll3Text from './scroll-level-3/html/text.md'
import scroll3 from './scroll-level-3/html/scroll-level-3.md'

import responsiveHeading from './responsive/html/heading.md'
import responsive from './responsive/html/responsive.md'

const markdown =
  intro +
  responsiveHeading +
  responsive +
  defaultMenuText +
  defaultmenu +
  scroll1Text +
  scroll1 +
  expandedText +
  expanded +
  scroll2Text +
  scroll2 +
  scroll3Text +
  scroll3 +
  searchText +
  search

const Navigation = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={'Navigation'} />
      <Markdown source={markdown} />
      <Modals uri={uri} />
    </React.Fragment>
  )
}

export default Navigation
