import React, { Fragment } from 'react'
import Column from '../Column'
import styles from './Forms.scss'

const AlternativeError = ({ title, placeholder, suggestion, filled }) => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div style={{ margin: '0' }} className='vf-col'>
          <h4>{title}</h4>
        </div>
      </div>
      <div className='vf-row'>
        <Column title={'Default'}>
          <div className={`vf-alt-input-container ${styles.disableHover}`}>
            <input
              type='text'
              id='vf_alt_error_state_input'
              placeholder={placeholder}
              className='vf-alt-input vf-alt-input--error'
            />
            <label htmlFor='vf_alt_error_state_input'>Label</label>
            <span className='vf-alt-input--error-msg'>Error Message</span>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className={`vf-alt-input-container ${styles.disableHover}`}>
            <input
              type='text'
              id='vf_alt_error_state_input'
              className={`vf-alt-input vf-alt-input--error ${styles.alternativeHoverError}`}
              placeholder={placeholder}
            />
            <label htmlFor='vf_alt_error_state_input'>Label</label>
            <span className='vf-alt-input--error-msg'>Error Message</span>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div className={`vf-alt-input-container ${styles.disableHover}`}>
            <input
              type='text'
              id='vf_alt_error_state_input'
              className={`vf-alt-input vf-alt-input--error ${styles.alternativeFocusError}`}
              defaultValue={suggestion}
            />
            <label htmlFor='vf_alt_error_state_input'>Label</label>
            <span className='vf-alt-input--error-msg'>Error Message</span>
          </div>
        </Column>
        <Column title='Filled'>
          <div className={`vf-alt-input-container ${styles.disableHover}`}>
            <input
              type='text'
              id='vf_alt_error_state_input'
              className={`vf-alt-input vf-alt-input--error`}
              defaultValue={filled}
            />
            <label htmlFor='vf_alt_error_state_input'>Label</label>
            <span
              className={`vf-alt-input--error-msg ${styles.alternativeErrorMsg}`}
            >
              Error Message
            </span>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}

export default AlternativeError
