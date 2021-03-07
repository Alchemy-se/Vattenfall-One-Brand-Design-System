import React, { Fragment } from 'react'
import Column from '../Column'
import styles from './Forms.scss'

const AlternativeDetailedText = ({ title, placeholder, suggestion, filled}) => {
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
              id='vf_alt_input'
              className='vf-alt-input'
              placeholder={placeholder}
            />
            <label htmlFor='vf_alt_input'>Label</label>
            <span className='vf-alt-input--detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className={`vf-alt-input-container ${styles.disableHover}`}>
            <input
              type='text'
              id='vf_alt_input'
              className={`vf-alt-input ${styles.alternativeHover}`}
              placeholder={placeholder}
            ></input>
            <label htmlFor='vf_alt_input'>Label</label>
            <span className='vf-alt-input--detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div className={`vf-alt-input-container ${styles.disableHover}`}>
            <input
              type='text'
              id='vf_alt_input'
              className={`vf-alt-input ${styles.alternativeFocus}`}
              defaultValue={suggestion}
            />
            <label htmlFor='vf_alt_input'>Label</label>
            <span className='vf-alt-input--detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
        <Column title='Filled'>
          <div className={`vf-alt-input-container ${styles.disableHover}`}>
            <input
              type='text'
              id='vf_alt_input'
              className={`vf-alt-input`}
              defaultValue={filled}
            />
            <label htmlFor='vf_alt_input'>Label</label>
            <span className='vf-alt-input--detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}

export default AlternativeDetailedText
