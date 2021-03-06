import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import YellowButtons from './yellow'
import BlueButtons from './blue'
import InChargeGreenButtons from "./InChargeGreenButtons"
import TertiaryBlackButtons from './tertiaryBlack'
import TertiaryBlueButtons from './tertiaryBlue'
import TextButtons from './textButtons'
import TextLinks from './textLinks'
import SelectToggle from './selectToggle'
import RadioButtons from './radioButtons'
import Checkbox from './checkbox'
import GroupDesktop from './groupDesktop'
import GroupMobile from "./groupMobile"
import Description from '../Description'
import DottedDescription from '../DottedDescription'

const buttonLabel = 'Button label'
const placeholder = 'Placeholder'

const Button = () => {
  return (
    <Fragment>
      <PageHeader title='Buttons' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <p>
        Buttons indicate actions on the page. Each of our button types have
        specific purposes that are used consistently. Individual button types
        are shown below, but the guidelines will help you understand basic
        functionality for all our buttons.
      </p>
      <DottedDescription
        title='Best practices'
        text='Buttons should: '
        dottedLines={[
          'Be clearly and accurately labelled',
          'Lead with strong, actionable verbs.',
          'Use established button colours appropriately.',
          'Prioritize the most important actions. Too many calls to action can cause confusion and make users unsure of what to do next.',
          'Be positioned in consistent locations in the interface.',
        ]}
      />
      <Description
        title='Interactions'
        text='The buttons have an arrow on hover. It animates from left to right on the left side of the button.'
      />
      <DottedDescription
        title='Primary buttons'
        text='Primary buttons should be used for primary calls to action'
        dottedLines={[
          'Only one primary button should be contained in each card or screen view',
          'Should never be used for destructive actions',
          'Should never be used as a cancel button',
        ]}
      />
      <div className='vf-row w-75'>
        <div style={{ margin: '0' }} className='vf-col'>
          <h4 className='use-in-toc'>Padding</h4>
          <p>
            Buttons with Icon has 64px space left and right between edge and
            text. Buttons without Icon, has a minimum of 28px left and right.
          </p>
        </div>
      </div>
      <YellowButtons title='Yellow' label={buttonLabel} />
      <div className='vf-mt-lg' />
      <BlueButtons title='Blue' label={buttonLabel} />
      <div className='vf-mt-xl' />
      <InChargeGreenButtons title={"InCharge Green"} label={"Button Label"} />
      <div className='vf-mt-xl' />
      <DottedDescription
        title='Secondary buttons'
        text={
          <Fragment>
            <p>
              Outlined buttons (often called “ghost” buttons) are a step up in
              complexity and emphasis from a text button in button design. They
              typically indicate actions that are important but not the primary
              action on a page. Outlined buttons should be exactly that: an
              outline with no fill surrounding text that indicates an action.
            </p>
            <p>
              Secondary buttons should be used for actions, which stands for a
              secondary task
            </p>
          </Fragment>
        }
        dottedLines={[
          'Should be used for irreversible actions',
          'Should never be used as a primary button',
        ]}
      />
      <TertiaryBlackButtons
        title='Tertiary Black (outlined button)'
        label={buttonLabel}
      />
      <div className='vf-mt-lg' />
      <TertiaryBlueButtons
        title='Tertiary Blue (outlined button)'
        label={buttonLabel}
      />
      <div className='vf-mt-xl' />
      <Description
        title='Text buttons and links'
        text={`Text buttons are text labels that fall outside of a block of text. The text should describe the action that will occur if a user clicks or taps a button. Text buttons have a low level of emphasis and are typically used for less important actions. Because text buttons don’t have a container, they don’t distract from nearby content. When you want to use a tertiairy button as a return button, point the arrow to the left.`}
      />
      <TextButtons label='Text label' />
      <div className='vf-mt-xl' />
      <Description
        title='Text links'
        leftText={`Text links are used in bodytext when you need to link to other content.`}
        rightText={``}
      />
      <TextLinks label={placeholder} />
      <div className='vf-mt-xl' />
      <Description
        title='Toggle'
        text='Toggles are used to indicate when a certain feature on a page is engaged / disengaged.'
      />
      <SelectToggle label={placeholder} />
      <div className='vf-mt-xl' />
      <Description
        title='Radio button'
        text='Radio buttons should be used when a single preference selection is needed. If multiple selections are needed checkboxes should be used instead.'
      />
      <RadioButtons label={placeholder} />
      <div className='vf-mt-xl' />
      <Description
        title='Checkbox'
        text='Checkboxes can be used to visualise the selection of one or several desired states. Ideally the use of a single checkbox should be relevant in the context such as agreeing to Terms & Conditions, in most other cases radio buttons should be used.'
      />
      <Checkbox label={placeholder} />
      <div className='vf-mt-xl' />

      <Description
        title='Button Group'
        text='The Button Group component should be used for group related buttons. The maximum number of buttons should be four. Desktop version should be 64px in height and 16px font size. The Tablet version should be 52px in height and 16px font size. Mobile version stacks the Buttons and should have a height of 40px with a 16px padding horizontally and 16px font size. If more then four buttons are needed on mobile use the scrollable Tabs.'
      />

      <GroupDesktop title={'Desktop and tablet'} />
      <div className='vf-mt-xl' />
      <GroupMobile title={'Mobile'} />
      <div className='vf-mt-xl' />
    </Fragment>
  )
}

export default Button
