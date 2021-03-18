import React, { Fragment } from 'react'

// LAYOUT
import PageHeader from '../PageHeader'
import Description from '../Description'

// COMPONENTS
import RadioButton from './RadioButton'
import Link from './Link'
import Checkbox from './Checkbox'
import { Radio } from 'antd'

const VisualPickers = () => {
  return (
    <Fragment>
      <PageHeader title='Visual Pickers' />
      <section className='p-2 vf-border-top-gray-200'/>

      <Description title='Radio Buttons' />
      <RadioButton title='Radio Buttons' />

      <Description title='Checkboxes' />
      <Checkbox title='Checkbox' />

      <Description title='Links' />
      <Link title='Links' />
    </Fragment>
  )
}

export default VisualPickers
