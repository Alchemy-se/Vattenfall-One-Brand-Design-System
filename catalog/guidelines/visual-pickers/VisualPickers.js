import React, { Fragment } from 'react'
import PageHeader from '../PageHeader'
import Column from '../Column'
import Small from './Small'
import Medium from './Medium'
import MediumTwoLine from './MediumTwoLine'
import MediumTwoLineIcon from './MediumTwoLineIcon'
import Large from './Large'
import Description from '../Description'

const VisualPickers = () => {
  return (
    <Fragment>
      <PageHeader title='Visual Pickers' />
      <section className='p-2 vf-border-top-gray-200' />
      <p>
        A visual picker can be used when the options benefit from being visually
        enhanced. It can be either radio buttons or checkboxes.
      </p>
      <p>
        When options are more than 6 on desktop and 4 on mobile, dropdown should
        be used instead of a visual picker. Visual picker can be set to a single
        or multiple selection. The padding between each picker is set to 24px
        horizontally and 28px vertically. The text label inside should on all
        breakpoints remain on a single line with a 20px font-size.
      </p>
      <Description
        title='Small'
        text='The text inside is aligned to the left with a 24px padding on the left side. The height of the Small version is set to 52px.'
      />
      <div className='vf-row'>
        <Column title={'Default'}>
          <Small
            id={1}
            type={'radio'}
            select={'single-select'}
            divStyles={disablePointer}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Hover'}>
          <Small
            id={2}
            type={'radio'}
            select={'single-select'}
            divStyles={hoverStyle}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Active'}>
          <Small
            id={3}
            type={'radio'}
            select={'single-select'}
            divStyles={activeStyle}
            labelStyles={disablePointer}
            checkmark={'vf-icon-check'}
          />
        </Column>
        <Column title={'Disabled'}>
          <Small
            id={4}
            type={'radio'}
            select={'single-select'}
            divStyles={disabledStyle}
            labelStyles={disablePointer}
          />
        </Column>
      </div>
      <Description
        title='Medium'
        text='Currently being used in product configurator for ordering Smart Home charging station (B2C). The text inside the Medium version is always centered aligned within it’s container. The height of this version is set to 90px.'
      />
      <div className='vf-row'>
        <Column title={'Default'}>
          <Medium
            id={1}
            type={'radio'}
            select={'single-select'}
            divStyles={disablePointer}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Hover'}>
          <Medium
            id={2}
            type={'radio'}
            select={'single-select'}
            divStyles={hoverStyle}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Active'}>
          <Medium
            id={3}
            type={'radio'}
            select={'single-select'}
            divStyles={activeStyle}
            labelStyles={disablePointer}
            checkmark={'vf-icon-check'}
          />
        </Column>
        <Column title={'Disabled'}>
          <Medium
            id={4}
            type={'radio'}
            select={'single-select'}
            divStyles={disabledStyle}
            labelStyles={disablePointer}
          />
        </Column>
      </div>
      <Description title='Medium Two Line' />
      <div className='vf-row'>
        <Column title={'Default'}>
          <MediumTwoLine
            id={1}
            type={'radio'}
            select={'single-select'}
            divStyles={disablePointer}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Hover'}>
          <MediumTwoLine
            id={2}
            type={'radio'}
            select={'single-select'}
            divStyles={hoverStyle}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Active'}>
          <MediumTwoLine
            id={3}
            type={'radio'}
            select={'single-select'}
            divStyles={activeStyle}
            labelStyles={disablePointer}
            checkmark={'vf-icon-check'}
          />
        </Column>
        <Column title={'Disabled'}>
          <MediumTwoLine
            id={4}
            type={'radio'}
            select={'single-select'}
            divStyles={disabledStyle}
            labelStyles={disablePointer}
          />
        </Column>
      </div>
      <Description title='Medium Two Line Icon' />
      <div className='vf-row'>
        <Column title={'Default'}>
          <MediumTwoLineIcon
            id={1}
            type={'radio'}
            select={'single-select'}
            divStyles={disablePointer}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Hover'}>
          <MediumTwoLineIcon
            id={2}
            type={'radio'}
            select={'single-select'}
            divStyles={hoverStyle}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Active'}>
          <MediumTwoLineIcon
            id={3}
            type={'radio'}
            select={'single-select'}
            divStyles={activeStyle}
            labelStyles={disablePointer}
            checkmark={'vf-icon-check'}
          />
        </Column>
        <Column title={'Disabled'}>
          <MediumTwoLineIcon
            id={4}
            type={'radio'}
            select={'single-select'}
            divStyles={disabledStyle}
            labelStyles={disablePointer}
          />
        </Column>
      </div>
      <Description title='Large' />
      <div className='vf-row'>
        <Column title={'Default'}>
          <Large
            id={1}
            type={'radio'}
            select={'single-select'}
            divStyles={disablePointer}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Hover'}>
          <Large
            id={2}
            type={'radio'}
            select={'single-select'}
            divStyles={hoverStyle}
            labelStyles={disablePointer}
          />
        </Column>
        <Column title={'Active'}>
          <Large
            id={3}
            type={'radio'}
            select={'single-select'}
            divStyles={activeStyle}
            labelStyles={disablePointer}
            checkmark={'vf-icon-check'}
          />
        </Column>
        <Column title={'Disabled'}>
          <Large
            id={4}
            type={'radio'}
            select={'single-select'}
            divStyles={disabledStyle}
            labelStyles={disablePointer}
            imgStyles={disabledImgStyle}
          />
        </Column>
      </div>
    </Fragment>
  )
}

const disablePointer = {
  pointerEvents: 'none',
  color: '#767676',
}

const hoverStyle = {
  border: '1px solid rgb(153, 153, 153)',
  pointerEvents: 'none',
}

const activeStyle = {
  border: '2px solid #1964A3',
  pointerEvents: 'none',
  background: '#EDF1F6',
}

const disabledStyle = {
  background: '#EEEEEE',
  pointerEvents: 'none',
}

const disabledImgStyle = {
  opacity: '0.65',
}

export default VisualPickers
