import React, { Fragment } from 'react'
import Column from '../Column'
import styles from './Forms.scss'

const AlternativeTooltip = ({ title, placeholder, suggestion, filled }) => {
  return (
    <div>
      <Fragment>
        <div className='vf-row'>
          <div style={{ margin: '0' }} className='vf-col'>
            <h4>{title}</h4>
          </div>
        </div>
        <div className='vf-row'>
          <Column title={'Default'}>
            <div
              className={`vf-alt-input-container ${styles.alternativeTooltipHover}`}
            >
              <input
                type='text'
                id='vf_alt_tooltip_input'
                className='vf-alt-input'
                placeholder={placeholder}
                data-tooltip='Tooltip text'
              />
              <label htmlFor='vf_alt_tooltip_input'>Tooltip Label</label>
            </div>
          </Column>
          <Column title={'Hover'}>
            <div
              className={`vf-alt-input-container ${styles.alternativeTooltipHover}`}
            >
              <input
                type='text'
                id='vf_alt_tooltip_input'
                className={`vf-alt-input ${styles.alternativeHover} ${styles.fullWidth}`}
                placeholder={placeholder}
                data-tooltip='Tooltip text'
              ></input>
              <label htmlFor='vf_alt_input'>Label</label>
            </div>
          </Column>
          <Column title={'Focus with suggestion'}>
            <div
              className={`vf-alt-input-container ${styles.alternativeTooltipHover}`}
            >
              <input
                type='text'
                id='vf_alt_tooltip_input'
                className={`vf-alt-input ${styles.alternativeFocus} ${styles.fullWidth}`}
                defaultValue={suggestion}
                data-tooltip='Tooltip text'
              />
              <label htmlFor='vf_alt_input'>Label</label>
            </div>
          </Column>
          <Column title='Filled'>
            <div
              className={`vf-alt-input-container ${styles.alternativeTooltipHover}`}
            >
              <input
                type='text'
                id='vf_alt_tooltip_input'
                className={`vf-alt-input`}
                defaultValue={filled}
                data-tooltip='Tooltip text'
              />
              <label htmlFor='vf_alt_input'>Label</label>
            </div>
          </Column>
        </div>
      </Fragment>
    </div>
  )
}

export default AlternativeTooltip
