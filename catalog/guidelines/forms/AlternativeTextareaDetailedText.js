import React, { Fragment } from 'react'
import Column from '../Column'
import styles from './Forms.scss'

const AlternativeTextareaDetailedText = ({ title, placeholder, suggestion, filled }) => {
  return (
    <Fragment>
      <div className={`vf-row `}>
        <div style={{ margin: '0' }} className='vf-col'>
          <h4>{title}</h4>
        </div>
      </div>
      <div className='vf-row'>
        <Column title={'Default'}>
          <div
            className={`vf-alt-input-container vf-alt-input-container-textarea ${styles.disableHover}`}
          >
            <textarea
              rows='4'
              cols='50'
              placeholder={placeholder}
              id='vf__alt_textarea_input'
              className='vf-alt-input'
            ></textarea>
            <label className='vf-alt-input-label' htmlFor='vf_alt_textarea_input'>Textarea Label</label>
            <span className='vf-alt-input--textarea-detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div
            className={`vf-alt-input-container vf-alt-input-container-textarea ${styles.disableHover}`}
          >
            <textarea
              rows='4'
              cols='50'
              placeholder={placeholder}
              id='vf__alt_textarea_input'
              className={`vf-alt-input ${styles.alternativeHover}`}
            ></textarea>
            <label className='vf-alt-input-label' htmlFor='vf_alt_textarea_input'>Textarea Label</label>
            <span className='vf-alt-input--textarea-detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div
            className={`vf-alt-input-container vf-alt-input-container-textarea ${styles.disableHover}`}
          >
            <textarea
              rows='4'
              cols='50'
              defaultValue={suggestion}
              id='vf__alt_textarea_input'
              className={`vf-alt-input ${styles.alternativeFocus}`}
            ></textarea>
            <label className='vf-alt-input-label' htmlFor='vf_alt_textarea_input'>Textarea Label</label>
            <span className='vf-alt-input--textarea-detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
        <Column title={'Filled'}>
          <div
            className={`vf-alt-input-container vf-alt-input-container-textarea ${styles.disableHover}`}
          >
            <textarea
              rows='4'
              cols='50'
              defaultValue={filled}
              id='vf__alt_textarea_input'
              className='vf-alt-input'
            ></textarea>
            <label className='vf-alt-input-label' htmlFor='vf_alt_textarea_input'>Textarea Label</label>
            <span className='vf-alt-input--textarea-detailed-text'>
              Detailed information text here
            </span>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}

export default AlternativeTextareaDetailedText
