import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown'
import scroll from '../../components/tab-bar/incharge-scrollable-tab-bar/html/incharge-scrollable-tab-bar.md'

const Scroll = ({ editMd }) => {
  return (
    <Fragment>
      <h4 className='use-in-toc'>InCharge Tab bar Mobile / Scrollable</h4>
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
