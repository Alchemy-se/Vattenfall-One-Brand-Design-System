import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const StandardUnderlineInputWarning = ({ title, label }) => {
  return (
    <Fragment>
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="vf-row">
        <Column title={'Default'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_underline_input"
              className={`vf-input vf-input--underline vf-input--warning ${styles.fullWidth}`}
            ></input>
            <label for="vf_underline_input">{label}</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_underline_input"
              className={`vf-input vf-input--underline vf-input--warning ${styles.underlineInputHoverWarning} ${styles.fullWidth}`}
            ></input>
            <label for="vf_underline_input">{label}</label>
          </div>
        </Column>
        <Column title={'Focus'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_underline_input"
              className={`vf-input vf-input--underline vf-input--data vf-input--warning ${styles.underlineInputFocusWarning} ${styles.fullWidth}`}
              defaultValue="Value with suggestion"
            ></input>
            <label for="vf_underline_input">{label}</label>
          </div>
        </Column>
        <Column title={'Selected'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_underline_input"
              className={`vf-input vf-input--underline vf-input--data vf-input--warning ${styles.fullWidth}`}
              defaultValue="Value filled in"
            ></input>
            <label for="vf_underline_input">{label}</label>
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default StandardUnderlineInputWarning;
