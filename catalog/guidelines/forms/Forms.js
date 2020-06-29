import React, { Fragment } from 'react';
import PageHeader from '../pageHeader';
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

const Forms = () => {
  return (
    <Fragment>
      <PageHeader title="Forms" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Standard Forms"
        leftText={`Forms and input fields are 52px height and the spacing between Input
                   fields should always be 28px when stacked on top of each other`}
        rightText={`Standard Forms are used for 3 or more inputfields. If 3 or less, then use
                    the underline input. All inputfieldson white background`}
      />
      <StandardInput title="Standard" label="Input label" />
      <StandardInputWithTooltip title="Standard With Tooltip" label="Input label" />
      <StandardInputWarning title="Standard Warning" label="Warning state label" />
      <StandardInputError title="Standard Error" label="Error state label" />
      <Description title="Dropdown menu" leftText={`Dropdown menu is always 52px in height.`} rightText={``} />
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
        leftText={`Number input should always be 52px in height. Like dropdowns, numbers include an ever-present label in order to be visible.`}
        rightText={``}
      />
      <NumericInput title="Standard" />
      <Description
        title="Textarea"
        leftText={`Like dropdowns, text fields include an ever-present label in order to be accessible.`}
        rightText={``}
      />
      <Textarea title="Standard" />
      <TextareaError title="Textarea Error" />
    </Fragment>
  );
};

export default Forms;
