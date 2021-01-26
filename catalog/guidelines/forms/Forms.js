import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import Description from '../Description';

import StandardInput from './StandardInput';
import StandardInputWithTooltip from './StandardInputWithTooltip';
import StandardInputWarning from './StandardInputWarning';
import StandardInputError from './StandardInputError';

import StandardDropdown from './StandardDropdown';
import StandardDropdownWithCheckboxes from './StandardDropdownWithCheckboxes';

import StandardUnderlineInput from './StandardUnderlineInput';
import StandartUnderlineInputWithTooltip from './StandartUnderlineInputWithTooltip';
import StandardUnderlineInputWarning from './StandardUnderlineInputWarning';
import StandardUnderlineInputError from './StandardUnderlineInputError';
import UnderlineDropbox from './UnderlineDropbox';

import NumericInput from './NumericInput';

import Textarea from './Textarea';
import TextareaError from './TextareaError';

import TooltipsOutlined from './TooltipsOutlined';
import TooltipsSolid from './TooltipsSolid';

const Forms = () => {
  return (
    <Fragment>
      <PageHeader title='Forms' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='vf-row w-75'>
        <div className='vf-col'>
          <p>
            Forms are used for submitting data so be as concise as possible when
            designing. Keep it short. Think about each field and what value the
            data will provide. Input text are the most commonly used form
            control. Input fields are suitable for getting textual data from the
            user. Below you will find ”Standard” Input fields, ”dropdown”,
            ”Underline Input” and more.
          </p>
          <p>
            Forms will be updated with new features created for InCharge web,
            portal and app in the near future.
          </p>
          <strong>Behaviour</strong>
          <p>
            Error messages are displayed below the input field. When the users
            input isn’t valid the error message will be displayed. The
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
      <Description
        title='Dropdown'
        text='Dropdown allows you to make a particular choice within a compact area. It’s useful especially for mobile devices.
        Only one item can be chosen at the time. It’s often a good idea to use this element when the number of items to be chosen from exceeds three options.'
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
        title='Textarea'
        text='Textarea provides the possibility for the custom input from the user. Use this element when personal feedback from the user is needed or the situation itself is not specific enough to support pre-definied option for the user to choose from.'
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
};

export default Forms;
