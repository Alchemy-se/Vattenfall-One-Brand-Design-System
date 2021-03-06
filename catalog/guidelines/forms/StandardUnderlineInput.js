import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const StandardUnderlineInput = ({ title, label }) => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div style={{ margin: '0' }} className='vf-col'>
          <h4>{title}</h4>
        </div>
      </div>
      <div className='vf-row'>
        <Column title={'Default'}>
          <div className='vf-input-container'>
            <input
              type='text'
              id='vf_underline_input'
              className={`vf-input vf-input--underline ${styles.fullWidth}`}
            ></input>
            <label htmlFor='vf_underline_input'>{label}</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className='vf-input-container'>
            <input
              type='text'
              id='vf_underline_input'
              className={`vf-input vf-input--underline ${styles.underlineInputHover} ${styles.fullWidth}`}
            ></input>
            <label htmlFor='vf_underline_input'>{label}</label>
          </div>
        </Column>
        <Column title={'Focus'}>
          <div className='vf-input-container'>
            <input
              type='text'
              id='vf_underline_input'
              className={`vf-input vf-input--underline vf-input--data ${styles.underlineInputFocus} ${styles.fullWidth}`}
              defaultValue='Value with suggestion'
            ></input>
            <label htmlFor='vf_underline_input'>{label}</label>
          </div>
        </Column>
        <Column title={'Selected'}>
          <div className='vf-input-container'>
            <input
              type='text'
              id='vf_underline_input'
              className={`vf-input vf-input--underline vf-input--data ${styles.fullWidth}`}
              defaultValue='Value filled in'
            ></input>
            <label htmlFor='vf_underline_input'>{label}</label>
          </div>
        </Column>
      </div>
    </Fragment>
  )
};

export default StandardUnderlineInput;
