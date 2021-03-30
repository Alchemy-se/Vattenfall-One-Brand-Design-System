import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown'
import scroll from '../../components/tab-bar/tab-bar-mobile-scrollable/html/tab-bar-mobile-scrollable.md'

const Scroll = ({ editMd }) => {
  return (
    <Fragment>
      <h4 className='use-in-toc'>Tab bar Mobile / Scrollable</h4>
      <div style={styles}>
        <Markdown source={editMd(scroll)} />
      </div>
    </Fragment>
  )
}
const styles = {
  marginLeft: '-50px',
}

export default Scroll
