import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import Markdown from '../../lib/markdown'
import DottedDescription from '../DottedDescription'
import GuidelinesBlock from '../guidelinesBlock'
import Description from '../Description'
import spinner from '../../components/spinner/spinner/html/spinner.md'

const Spinner = () => {
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
      <PageHeader title='Spinner' />
      <DottedDescription
        text='A spinner animation is used to indicate an ongoing loading process.'
        dottedLines={[
          'When centered on the screen upon initial load they indicate the loading of screen content.',
          'When used above or below existing content, they draw attention to where new content will appear.',
        ]}
      />
      <Description
        title='Size and Appearance'
        text='The VF_Spinner should always be horizontal and vertically centered in the space it should display in. Recommended sizes are
        24px, 44px, 88px, the default should be 44px and the maximum size
        allowed is 88px. Background should always be white with an opacity of
        92%.'
      />
      <GuidelinesBlock title='Examples'>
        <Markdown source={editMd(spinner)} />
      </GuidelinesBlock>
      <div style={divStyle}></div>
    </Fragment>
  )

}

const divStyle = {
  marginLeft:"-44px"
}

export default Spinner
