import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const StandardInputWithTooltip = ({ title, label }) => {
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
              id="vf_tooltip_input"
              className={`vf-input ${styles.fullWidth}`}
              data-tooltip="Tooltip text"
            ></input>
            <label htmlFor="vf_tooltip_input">{label}</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_tooltip_input"
              className={`vf-input ${styles.standardWithTooltipHover} ${styles.fullWidth}`}
              data-tooltip="Tooltip text"
            ></input>
            <label htmlFor="vf_tooltip_input">{label}</label>
          </div>
        </Column>
        <Column title={'Focus with suggestion'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_tooltip_input"
              className={`vf-input vf-input--data ${styles.fullWidth}`}
              data-tooltip="Tooltip text"
              placeholder=""
              defaultValue="Value filled in"
              readOnly
            ></input>
            <label htmlFor="vf_tooltip_input">{label}</label>
          </div>
        </Column>
        <Column title={'Filled'}>
          <div className="vf-input-container">
            <input
              type="text"
              id="vf_tooltip_input"
              className={`vf-input vf-input--data vf-input--blured-label vf-input--blured-standard ${styles.fullWidth}`}
              data-tooltip="Tooltip text"
              defaultValue="Value filled in"
              readOnly
            ></input>
            <label htmlFor="vf_tooltip_input">{label}</label>
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default StandardInputWithTooltip;
