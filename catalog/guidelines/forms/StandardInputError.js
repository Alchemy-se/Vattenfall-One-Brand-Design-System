import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const StandardInputError = ({ title, label }) => {
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
              id="vf_error_state_input"
              className={`vf-input vf-input--error ${styles.fullWidth}`}
              placeholder="Standard Label"
            ></input>
            <label htmlFor="vf_error_state_input">{label}</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_error_state_input"
              className={`vf-input vf-input--error ${styles.standardErrorHover} ${styles.fullWidth}`}
              placeholder="Standard Label"
            ></input>
            <label htmlFor="vf_error_state_input">{label}</label>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_error_state_input"
              className={`vf-input vf-input--error vf-input--data ${styles.fullWidth}`}
              placeholder="Standard Label"
              defaultValue="Value with suggestion"
              readOnly
            />
            <label htmlFor="vf_error_state_input">{label}</label>
          </div>
        </Column>
        <Column title={'Filled'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_error_state_input"
              className={`vf-input vf-input--error vf-input--data ${styles.fullWidth}`}
              placeholder="Standard Label"
              defaultValue="Value filled in"
              readOnly
            />
            <label htmlFor="vf_error_state_input">{label}</label>
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default StandardInputError;
