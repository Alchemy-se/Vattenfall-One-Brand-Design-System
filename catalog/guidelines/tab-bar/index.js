import React, { Fragment } from 'react'
import Fixed from './Fixed'
import Scroll from './Scroll'
import PageHeader from '../PageHeader'

const index = () => {
  const editMd = mdText => {
    const hideSourceCode = mdText.replace(
      'showSource: true',
      'showSource: false'
    )
    const removeH3 = hideSourceCode.substring(hideSourceCode.indexOf('\n') + 1)
    return removeH3
  }
  return (
    <Fragment>
      <PageHeader title='Tab Bar' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='row align-items-start'>
        <Fixed editMd={editMd} />
        <Scroll editMd={editMd} />
      </div>
    </Fragment>
  )
}

export default index
