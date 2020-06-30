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
      <PageHeader title="Forms" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row w-75">
        <div className="vf-col">
          <p>
            Input text are the most commently use form control. Input fields are suitable for getting textual data from
            the user.
          </p>
          <p>
            Behaviour
            <br />
            Input text contain a label above the input field.
          </p>
          <p>
            Error messages are displayed below the input field. When the users input isn’t valid the error message will
            be displayed. The application wich implements the input fields is responsible for validation and display of
            the error message.{' '}
          </p>
        </div>
      </div>
      <div className="vf-mt-lg" />
      <StandardInput title="Standard" label="Input label" />
      <StandardInputWithTooltip title="Standard With Tooltip" label="Input label" />
      <StandardInputWarning title="Standard Warning" label="Warning state label" />
      <StandardInputError title="Standard Error" label="Error state label" />
      <div className="vf-mt-lg" />
      <Description
        title="Dropdown"
        text="Dropdown is an element that allows you to make a particular choice within compact area which is very useful, especially for the mobile devices. Only one item can be chosen at the time. Advice is to use this element when the amount of items to be chosen from exceeds 3 options. "
      />
      <StandardDropdown title="Standard" />
      <StandardDropdownWithCheckboxes title="Standard with checkboxes" />
      <Description
        title="Underline Input"
        leftText={`Underline input is only used when the input fields are three or less.`}
        rightText={`Distance between each field should always be 28px`}
      />
      <StandardUnderlineInput title="Standard" label="Input label" />
      <StandartUnderlineInputWithTooltip title="Standard with tooltip" label="Input label" />
      <StandardUnderlineInputWarning title="Underline Warning" label="Input label" />
      <StandardUnderlineInputError title="Underline Error" label="Input label" />
      <UnderlineDropbox title="Underline Dropbox" />
      <Description
        title="Number"
        text="Number input should alwasy be 52px in height. Like dropdowns, numbers include an ever-present label in order to be accessible."
      />
      <NumericInput title="Standard" />
      <Description
        title="Textarea"
        text="Textarea provides the possibility for the custom input from the user. Use this element when personal feedback from the user is needed or the situation itself is not specific enough to support pre-definied option for the user to choose from."
      />
      <Textarea title="Standard" />
      <TextareaError title="Textarea Error" />
      <div className="vf-mt-lg" />
      <Description
        title="Tooltip"
        text="Tooltips appear on hover and provide an additional layer of information for the user. They are filled with different colors in order to generate maximum contrast with the page beneath. Carets are positioned in the top center, bottom center, right center and left center "
      />
      <TooltipsSolid title="Solid" />
      <TooltipsOutlined title="Outlined" />
    </Fragment>
  );
};

export default Forms;
