import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const StandardInput = ({ title, label }) => {
  return (
    <Fragment>
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <h2 className="use-in-toc">{title}</h2>
        </div>
      </div>
      <div className="vf-row">
        <Column title={'Default'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_standard_input"
              className={`vf-input vf-input--css-placeholder ${styles.fullWidth}`}
              placeholder="Standard Label"
            ></input>
            <label htmlFor="vf_standard_input">{label}</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_standard_input"
              className={`vf-input vf-input--css-placeholder ${styles.standardHover} ${styles.fullWidth}`}
              placeholder="Standard Label"
            ></input>
            <label htmlFor="vf_standard_input">{label}</label>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_standard_input"
              className={`vf-input vf-input--css-placeholder ${styles.disableHover} ${styles.fullWidth}`}
              placeholder="Standard Label"
              defaultValue="Value with suggestion"
            />
            <label htmlFor="vf_standard_input">{label}</label>
          </div>
        </Column>
        <Column title={'Filled'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_standard_input"
              className={`vf-input vf-input--css-placeholder vf-input--blured-label vf-input--blured-standard ${styles.disableHover} ${styles.fullWidth}`}
              placeholder="Standard Label"
              defaultValue="Value filled in"
            />
            <label htmlFor="vf_standard_input">{label}</label>
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default StandardInput;
