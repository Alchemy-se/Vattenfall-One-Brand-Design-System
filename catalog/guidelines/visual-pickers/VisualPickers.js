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
      <Description title='Small' />
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
      <Description title='Medium' />
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
          />
        </Column>
      </div>
    </Fragment>
  )
}

const disablePointer = {
  pointerEvents: 'none',
}

const hoverStyle = {
  border: '1px solid rgb(153, 153, 153)',
  pointerEvents: 'none',
}

const activeStyle = {
  border: '1px solid #1964A3',
  pointerEvents: 'none',
}

const disabledStyle = {
  background: '#EEEEEE',
  pointerEvents: 'none',
}

export default VisualPickers
