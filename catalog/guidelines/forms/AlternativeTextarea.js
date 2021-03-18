import React, { Fragment } from 'react'
import Column from '../Column'
import styles from './Forms.scss'

const AlternativeTextarea = ({ title, placeholder, suggestion, filled }) => {
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
            <label htmlFor='vf_alt_textarea_input'>Textarea Label</label>
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
            <label htmlFor='vf_alt_textarea_input'>Textarea Label</label>
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
            <label htmlFor='vf_alt_textarea_input'>Textarea Label</label>
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
            <label htmlFor='vf_alt_textarea_input'>Textarea Label</label>
          </div>
        </Column>
      </div>
    </Fragment>
  )
}

export default AlternativeTextarea
