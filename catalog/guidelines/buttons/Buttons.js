import React, { Fragment } from 'react';
import PageHeader from '../../lib/pageHeader';
import YellowButtons from './yellow';
import BlueButtons from './blue';
import TertiaryBlackButtons from './tertiaryBlack';
import TertiaryBlueButtons from './tertiaryBlue';
import TextButtons from './textButtons';
import TextLinks from './textLinks';
import SelectToggle from './selectToggle';
import RadioButtons from './radioButtons';
import Checkbox from './checkbox';

import Description from '../Description';

const buttonLabel = 'Button Label';
const placeholder = 'Placeholder';

const Button = () => {
  return (
    <Fragment>
      <PageHeader title="Buttons" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description
        title="Primary Buttons"
        leftText={`Buttons comes in two sizes, Large 52px and Medium 40px.
        The large button is our main button used as default`}
        rightText={`The distance between two parallell butons shall always be 24px.`}
      />
      <YellowButtons title="Yellow" label={buttonLabel} />
      <BlueButtons title="Blue" label={buttonLabel} />
      <Description
        title="Secondary Buttons"
        leftText={`We use 2 different sizes for Secondary Buttons, Large(52px) and
        Medium (40px) Our main color for secondary buttons is The Tertiary `}
        rightText={`Blue and is always on White background. Tertiary Blck is used
        against our bckground colors.`}
      />
      <TertiaryBlackButtons title="Tertiary Black" label={buttonLabel} />
      <TertiaryBlueButtons title="Tertiary Blue" label={buttonLabel} />
      <Description
        title="Text Buttons"
        leftText={`We use 2 different sizes for Text Buttons, Text Button Default and Text
        Button Small. If you use more then 1 Text Button, then use Text Button`}
        rightText={`Small. If you only use one Text Button, then use Text Button Default.
        When used in a module, then always use Text Button Small.`}
      />
      <TextButtons label={buttonLabel} />
      <Description title="Text Links" leftText={`For usage in bodytext when links are needed`} rightText={``} />
      <TextLinks label={placeholder} />
      <Description
        title="Select Toggle"
        leftText={`Toggles are always 28px in height and aligned center with text`}
        rightText={``}
      />
      <SelectToggle label={placeholder} />
      <Description
        title="Radio Buttons"
        leftText={`Radio buttons are always 28px in height and aligned center with text`}
        rightText={``}
      />
      <RadioButtons label={placeholder} />
      <Description
        title="Checkbox"
        leftText={`Checkbox are always 28px in height and aligned center with text`}
        rightText={``}
      />
      <Checkbox label={placeholder} />
      <section className="p-2 vf-border-bottom-gray-200"></section>
    </Fragment>
  );
};

export default Button;
