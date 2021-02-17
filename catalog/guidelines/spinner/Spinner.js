import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import Markdown from '../../lib/markdown'
import DottedDescription from '../DottedDescription'
import Description from '../Description'
import spinners from '../../components/spinner/spinner/html/spinner.md'

const Spinners = () => {
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
      <PageHeader title='Spinners' />
      <DottedDescription
        text='Spinners are used to indicate an ongoing loading process.'
        dottedLines={[
          'When centered on the screen upon initial load they indicate the loading of screen content.',
          'When used above or below existing content, they draw attention to where new content will appear.',
        ]}
      />
      <Description
        title='Size and Appearance'
        text='The VF_Spinner should always be horizontal and
        vertically centered in the space it inhabits. Recommended sizes are
        24px, 44px, 88px, the default should be 44px and the maximum size
        allowed is 88px. Background should always be white with an opacity of
        92%.'
      />
      <Markdown source={editMd(spinners)} />
    </Fragment>
  )
}

export default Spinners
