import React, { Fragment } from 'react'
import styles from './VisualPickers.scss'

// LAYOUT
import Column from '../Column'

const RadioButton = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <Column title={'Default'}>
          <div className='vf-visual-pickers__radio' style={style}>
            <input
              className='vf-visual-pickers__radio-input'
              type='radio'
              name='radio'
              id='radio1'
            />
            <label className='vf-visual-pickers__label' htmlFor='radio1'>
              Radio button
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className={`vf-visual-pickers__radio ${styles.onHover}`}>
            <input
              className='vf-visual-pickers__radio-input'
              type='radio'
              name='radio'
              id='radio2'
            />
            <label className='vf-visual-pickers__label' htmlFor='radio2'>
              Radio button
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
        <Column title={'Active'}>
          <div className='vf-visual-pickers__radio' style={style}>
            <input
              className='vf-visual-pickers__radio-input'
              type='radio'
              name='radio'
              id='radio3'
            />
            <label className='vf-visual-pickers__label' htmlFor='radio3'>
              Radio button
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
        <Column title={'Disabled'}>
          <div className='vf-visual-pickers__radio' style={style}>
            <input
              className='vf-visual-pickers__radio-input'
              type='radio'
              name='radio'
              id='radio4'
            />
            <label className='vf-visual-pickers__label' htmlFor='radio4'>
              Radio button
            </label>
            <span className='vf-visual-pickers__icon'></span>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}
const style = {
  maringBottom: '20px',
}
export default RadioButton
