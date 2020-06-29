import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const StandardInputWarning = ({ title, label }) => {
  return (
    <Fragment>
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <h4>{title}</h4>
        </div>
      </div>
      <div className="vf-row">
        <Column title={'Default'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_warning_state_input"
              className={`vf-input vf-input--warning ${styles.fullWidth}`}
              placeholder="Standard Label"
            ></input>
            <label htmlFor="vf_warning_state_input">{label}</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_warning_state_input"
              className={`vf-input vf-input--warning ${styles.standardWarningHover} ${styles.fullWidth}`}
              placeholder="Standard Label"
            ></input>
            <label htmlFor="vf_warning_state_input">{label}</label>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_warning_state_input"
              className={`vf-input vf-input--warning vf-input--data ${styles.fullWidth}`}
              placeholder="Standard Label"
              defaultValue="Value with suggestion"
              readOnly
            />
            <label htmlFor="vf_warning_state_input">{label}</label>
          </div>
        </Column>
        <Column title={'Filled'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_warning_state_input"
              className={`vf-input vf-input--warning vf-input--data ${styles.fullWidth}`}
              placeholder="Standard Label"
              defaultValue="Value filled in"
              readOnly
            />
            <label htmlFor="vf_warning_state_input">{label}</label>
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default StandardInputWarning;
