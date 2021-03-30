import React, { Fragment } from 'react'
import GuidelinesBlock from '../guidelinesBlock'
import Markdown from '../../lib/markdown'
import fixed from '../../components/tab-bar/incharge-fixed-tab-bar/html/incharge-fixed-tab-bar.md'

const Fixed = ({ editMd }) => {
  return (
    <Fragment>
      <h4 className='use-in-toc'>InCharge Tab bar Mobile / Fixed</h4>
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
