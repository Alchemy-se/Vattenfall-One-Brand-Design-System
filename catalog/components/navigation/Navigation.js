import React from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown'
import Modals from '../../zendesk/modals/modals'
import defaultmenu from './default/html/default.md'
import search from './search/html/search.md'
import expanded from './expanded/html/expanded.md'
import scroll1 from "./scroll-level-1/html/scroll-level-1.md"
import scroll2 from "./scroll-level-2/html/scroll-level-2.md"
import scroll3 from "./scroll-level-3/html/scroll-level-3.md"
import responsive from "./responsive/html/responsive.md"

const markdown = defaultmenu + search + expanded + scroll1 + scroll2 + scroll3 + responsive

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