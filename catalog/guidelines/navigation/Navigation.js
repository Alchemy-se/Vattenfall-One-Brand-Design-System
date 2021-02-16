import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import Markdown from '../../lib/markdown'

import defaultMenu from '../../components/navigation/default/html/default.md'
import search from '../../components/navigation/search/html/search.md'
import expanded from '../../components/navigation/expanded/html/expanded.md'
import scroll1 from '../../components/navigation/scroll-level-1/html/scroll-level-1.md'
import scroll2 from '../../components/navigation/scroll-level-2/html/scroll-level-2.md'
import scroll3 from '../../components/navigation/scroll-level-3/html/scroll-level-3.md'
import responsive from '../../components/navigation/responsive/html/responsive.md'

const md =
  // introText +
  // responsiveText +
  responsive +
  // defaultText +
  defaultMenu +
  // scroll1Text +
  scroll1 +
  // expandedText +
  expanded +
  // scroll2Text +
  scroll2 +
  // scroll3Text +
  scroll3 +
  // searchText +
  search

const Navigation = () => {
  return (
    <Fragment>
      <PageHeader title='Navigation' />

      <p>This is the main menu that is used for both Desktop and Mobile</p>

      <Markdown source={md} />

      <p>
        The main menu is always 60px in height and the Logotype, text and icons
        are always aligned vertically centered. The typography should be
        Vattenfall Hall Medium 18px size. <br/> Colour should be #00000. Colour
        on hover and Active State should be #2071B5.
      </p>

      <p>This is the main menu state before interaction.</p>

      <p>
        The expanded menu displaying all levels of interaction; Active and Hover
        states. Level 2 always should always have the same height as Level 1 and
        with the following background colour: #EBF2F3. Level 2 follows the same
        typography rules as Level 1. Level 3 has a height of 88px and uses
        Vattenfall Hall Regular 16px with a line height of 36px.
      </p>

      <p>
        When the user scrolls down the page, Level 2 should be “sticky” to the
        top. When scrolling up all levels above should be revealed.
      </p>

      <p>
        When the user scrolls down the page, Level 3 should be “sticky” to the
        top. When scrolling up all levels above should be revealed.
      </p>

      <p>
        On hover the vf-icon-search scales up 30%. The active state reveals
        search as a dropdown of 160px height with a background color of #EDF1F6.
        Search text typography should use Vattenfall Hall Display Bold in 52px
        with vertically and be horizontally aligned center. On click to type the
        text disappears and a blinking text cursor should appear. After text
        input search results are displayed after pressing return. The user can
        exit the search by clicking anywhere outside or on the “X”.
      </p>

    </Fragment>
  )
}

export default Navigation
