import React, { Fragment } from 'react'
import Markdown from '../../lib/markdown'
import fixed from '../../components/tab-bar/tab-bar-mobile-fixed/html/tab-bar-mobile-fixed.md'

const Fixed = ({ editMd }) => {
  return (
    <Fragment>
      <h4 className='use-in-toc'>Tab bar Mobile / Fixed</h4>
      <div style={styles}>
        <Markdown source={editMd(fixed)} />
      </div>
    </Fragment>
  )
}
const styles = {
    marginLeft: "-50px"
}

export default Fixed
