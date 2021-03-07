import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import Description from '../Description'

import StandardInput from './StandardInput'
import StandardInputWithTooltip from './StandardInputWithTooltip'
import StandardInputWarning from './StandardInputWarning'
import StandardInputError from './StandardInputError'

import StandardDropdown from './StandardDropdown'
import StandardDropdownWithCheckboxes from './StandardDropdownWithCheckboxes'

import StandardUnderlineInput from './StandardUnderlineInput'
import StandartUnderlineInputWithTooltip from './StandartUnderlineInputWithTooltip'
import StandardUnderlineInputWarning from './StandardUnderlineInputWarning'
import StandardUnderlineInputError from './StandardUnderlineInputError'
import UnderlineDropbox from './UnderlineDropbox'

import NumericInput from './NumericInput'

import Textarea from './Textarea'
import TextareaError from './TextareaError'

import TooltipsOutlined from './TooltipsOutlined'
import TooltipsSolid from './TooltipsSolid'

import AlternativeStandard from './AlternativeStandard'
import AlternativeTooltip from "./AlternativeTooltip"
import AlternativeError from "./AlternativeError"
import AlternativeDetailedText from "./AlternativeDetailedText"
import AlternativeTextarea from "./AlternativeTextarea"
import AlternativeTextareaDetailedText from "./AlternativeTextareaDetailedText"

const Forms = () => {
  return (
    <Fragment>
      <PageHeader title='Forms' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='vf-row w-75'>
        <div className='vf-col'>
          <p>
            Forms are used for submitting key data so need to be designed
            specifically for the content it should capture. Keep it short and
            focus on what is needed to capture the relevant data. Input text is
            the most commonly used form control. Input fields are suitable for
            getting textual data from the user. Below you will find ”Standard”
            Input fields, ”dropdown”, ”Underline Input” and more.
          </p>
          <p>
            Forms will be updated with new features created for InCharge web,
            portal and app in the near future.
          </p>
          <strong>Behaviour</strong>
          <p>
            Error messages are displayed beneath the input field. If a user
            inputs invalid content, an error message should be displayed. The
            application which implements the input fields is responsible for
            validation and display of the error message.
          </p>
        </div>
      </div>
      <div className='vf-mt-lg' />
      <StandardInput title='Standard' label='Input label' />
      <StandardInputWithTooltip
        title='Standard With Tooltip'
        label='Input label'
      />
      <StandardInputWarning
        title='Standard Warning'
        label='Warning state label'
      />
      <StandardInputError title='Standard Error' label='Error state label' />
      <div className='vf-mt-lg' />

      
      {/* ALTERNATIVE WITH LABEL */}
      <Description title='Alternative With Label' />

      <AlternativeStandard
        title='Standard'
        placeholder='Placeholder Text'
        suggestion='Value with suggestion'
        filled='Value filled in'
      />
      <AlternativeTooltip
        title='Tooltip'
        placeholder='Placeholder Text'
        suggestion='Value with suggestion'
        filled='Value filled in'
      />
      <AlternativeError
        title='Error state'
        placeholder='Placeholder Text'
        suggestion='Value with suggestion'
        filled='Value filled in'
      />
      <AlternativeDetailedText
        title='Detailed text'
        placeholder='Placeholder text'
        suggestion='Value with suggestion'
        filled='Value filled in'
      />
      <AlternativeTextarea
        title='Textarea'
        placeholder='Placeholder Text'
        suggestion='Value with suggestion'
        filled='Value filled in'
      />
      <AlternativeTextareaDetailedText
        title='Textarea With Detailed Text'
        placeholder='Placeholder Text'
        suggestion='Value with suggestion'
        filled='Value filled in'
      />

      {/* DROPDOWN */}
      <Description
        title='Dropdown'
        text='Dropdowns allows the user to make a particular choice within a small space and is especially useful for mobile devices. Only one item can be chosen from the dropdown list at a time. usage of dropdowns are a good idea to use when the number of items to be chosen from exceeds three options.'
      />

      <StandardDropdown title='Standard' />
      <StandardDropdownWithCheckboxes title='Standard with checkboxes' />
      <Description
        title='Underline Input'
        leftText={`Underline input is only used when the input fields are three or less.`}
        rightText={`The distance between each field should always be 28px.`}
      />
      <StandardUnderlineInput title='Standard' label='Input label' />
      <StandartUnderlineInputWithTooltip
        title='Standard with tooltip'
        label='Input label'
      />
      <StandardUnderlineInputWarning
        title='Underline Warning'
        label='Input label'
      />
      <StandardUnderlineInputError
        title='Underline Error'
        label='Input label'
      />
      <UnderlineDropbox title='Underline Dropbox' />
      <Description
        title='Number'
        text='Number input should alwasy be 52px in height. Like dropdowns, numbers include an ever-present label in order to be accessible.'
      />
      <NumericInput title='Standard' />
      <Description
        title='Text area'
        text='Text areas allows the user to enter free text. Use this element when the user needs to type in their feedback rather than choose from pre-defined options.'
      />
      <Textarea title='Standard' />
      <TextareaError title='Textarea Error' />
      <div className='vf-mt-lg' />
      <Description
        title='Tooltip'
        text='Tooltips appear on hover and provide an additional layer of information for the user.
        They are filled with different colours in order to generate maximum contrast with the page beneath.
        Carets are positioned in the top center, bottom center, right center and left center.'
      />
      <TooltipsSolid title='Solid' />
      <TooltipsOutlined title='Outlined' />
    </Fragment>
  )
}

export default Forms
