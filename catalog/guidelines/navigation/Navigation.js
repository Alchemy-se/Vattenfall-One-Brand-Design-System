import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import Markdown from '../../lib/markdown'
import GuidelinesBlock from '../guidelinesBlock'
import responsive from '../../components/navigation/responsive/html/responsive.md'
import defaultMenu from '../../components/navigation/default/html/default.md'
import search from '../../components/navigation/search/html/search.md'
import expanded from '../../components/navigation/expanded/html/expanded.md'
import scroll1 from '../../components/navigation/scroll-level-1/html/scroll-level-1.md'
import scroll2 from '../../components/navigation/scroll-level-2/html/scroll-level-2.md'
import scroll3 from '../../components/navigation/scroll-level-3/html/scroll-level-3.md'

const Navigation = () => {

  let scriptUrl = '/js/navigation.min.js'
  return (
    <Fragment>
      <PageHeader title='Navigation' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <p style={pStyle}>
        This is the main menu that is used for both Desktop and Mobile
      </p>
      <GuidelinesBlock title='Responsive' style={headingStyle} />
      <div style={divStyle}>
        <Markdown source={responsive} scriptUrl={scriptUrl} />
      </div>
      <GuidelinesBlock title='Default Mobile' />
      <p style={pStyle}>
        The mobile menu is 56px in height and follows the width of the Mobile.
        The vf-icon-navigation is placed to the left with a distance of 18px
        from the top and 21px left. The Logo/horizontal/small is centered and
        the “vf-icon-search” is placed to the right with a distance of 18px from
        the top and 21px right. The navigation icon, VF logotype and Search Icon
        shouls all be vertically aligned center.
      </p>
      <GuidelinesBlock title='Expanded Level 1' />
      <p style={pStyle}>
        Level 1 has a height of 54px. All menu text shuold be in Vattenfall Hall
        Medium 16px. On Level 1 text should align left with a left-margin of
        21px. The vf-icon-more should align right with a right-margin of 21px.
        Both Text and icons are vertically aligned center.
      </p>
      <GuidelinesBlock title='Expanded Level 2' />
      <p style={pStyle}>
        When the iser clicks on the text it should take them direct to the page.
        On click of the vf-icon-more the menu should expand downwards and
        display level 3. The Vf-icon-more transforms into vf-icon-less
        information.
      </p>
      <GuidelinesBlock title='Expanded Level 3' />
      <p style={pStyle}>
        Level 3 has a height of 54px and a bg-colour of #EDF1F6. The text should
        align left with a left-margin of 35px. Between each section there should
        be a 1px white line.
      </p>

      <GuidelinesBlock title='Expanded Level 4' />
      <p style={pStyle}>
        Level 4 has a height of 54px and a bg-colour of #F2F2F2. The text should
        align left with a left-margin of 48px. Between each section there should
        be a 1px white line.
      </p>
      <GuidelinesBlock title='Expanded Level 4 Multi-line' />
      <p style={pStyle}>
        Level 4 muliti-line has a height of 72px and a bg-colour of #F2F2F2. The
        text should align left with a left-margin of 48px. The text has a
        Line-height of 20px. Between each section there should be a 1px white
        line.
      </p>
      <GuidelinesBlock title='Search Mobile' />
      <p style={pStyle}>
        The active state reveals search as a dropdown of 160px height with a
        background colour of #EDF1F6. The search text typography should be
        Vattenfall Hall Display Bold 52px and be vertically and horizontally
        aligned center. On click to type the text disappears and a blinking text
        cursor should appear. After text input search results are displayed
        after pressing return. The user can exit the search by clicking anywhere
        outside or on the “X”.
      </p>

      <GuidelinesBlock title='Default Desktop' />
      <p style={pStyle}>
        The main menu is always 60px in height and the Logotype, text and icons
        are always aligned vertically centered. The typography should be
        Vattenfall Hall Medium 18px size. <br /> Colour should be #00000. Colour
        on hover and Active State should be #2071B5.
      </p>
      <div style={divStyle}>
        <Markdown source={defaultMenu} scriptUrl={scriptUrl} />
      </div>

      <GuidelinesBlock title='Scroll Level 1' />
      <p style={pStyle}>This is the main menu state before interaction.</p>
      <div style={divStyle}>
        <Markdown source={scroll1} scriptUrl={scriptUrl} />
      </div>

      <GuidelinesBlock title='Expanded' />
      <p style={pStyle}>
        The expanded menu displaying all levels of interaction; Active and Hover
        states. Level 2 always should always have the same height as Level 1 and
        with the following background colour: #EBF2F3. Level 2 follows the same
        typography rules as Level 1. Level 3 has a height of 88px and uses
        Vattenfall Hall Regular 16px with a line height of 36px.
      </p>
      <div style={divStyle}>
        <Markdown source={expanded} scriptUrl={scriptUrl} />
      </div>

      <GuidelinesBlock title='Scroll Level 2' />
      <p style={pStyle}>
        When the user scrolls down the page, Level 2 should be “sticky” to the
        top. When scrolling up all levels above should be revealed.
      </p>
      <div style={divStyle}>
        <Markdown source={scroll2} scriptUrl={scriptUrl} />
      </div>

      <GuidelinesBlock title='Scroll Level 3' />
      <p style={pStyle}>
        When the user scrolls down the page, Level 3 should be “sticky” to the
        top. When scrolling up all levels above should be revealed.
      </p>
      <div style={divStyle}>
        <Markdown source={scroll3} scriptUrl={scriptUrl} />
      </div>

      <GuidelinesBlock title='Search' />
      <p style={pStyle}>
        On hover the vf-icon-search scales up 30%. The active state reveals
        search as a dropdown of 160px height with a background color of #EDF1F6.
        Search text typography should use Vattenfall Hall Display Bold in 52px
        with vertically and be horizontally aligned center. On click to type the
        text disappears and a blinking text cursor should appear. After text
        input search results are displayed after pressing return. The user can
        exit the search by clicking anywhere outside or on the “X”.
      </p>

      <div style={divStyle}>
        <Markdown source={search} scriptUrl={scriptUrl} />
      </div>
    </Fragment>
  )
}

const headingStyle = {
  margin:"44 0 0 0"
}

const divStyle = {
  marginLeft: '-44px',
}

const pStyle = {
  margin: '0',
}

export default Navigation
