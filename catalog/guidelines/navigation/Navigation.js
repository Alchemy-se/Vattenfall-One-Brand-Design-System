import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import GuidelinesBlock from '../guidelinesBlock'
import Markdown from '../../lib/markdown'

import introText from "../../components/navigation/default/html/intro.md"
import defaultText from "../../components/navigation/default/html/text.md"
import defaultMenu from '../../components/navigation/default/html/default.md'

import searchText from '../../components/navigation/search/html/text.md'
import search from '../../components/navigation/search/html/search.md'

import expandedText from '../../components/navigation/expanded/html/text.md'
import expanded from '../../components/navigation/expanded/html/expanded.md'

import scroll1Text from '../../components/navigation/scroll-level-1/html/text.md'
import scroll1 from '../../components/navigation/scroll-level-1/html/scroll-level-1.md'

import scroll2 from '../../components/navigation/scroll-level-2/html/scroll-level-2.md'
import scroll3 from '../../components/navigation/scroll-level-3/html/scroll-level-3.md'
import responsive from '../../components/navigation/responsive/html/responsive.md'

const md =
  introText + defaultText + defaultMenu + searchText + search + expandedText + expanded + scroll1Text + scroll1 + scroll2 + scroll3 + responsive

const Navigation = () => {
  return (
    <Fragment>
      <PageHeader title='Navigation' />
      <Markdown source={md} />
    </Fragment>
  )
}

export default Navigation
