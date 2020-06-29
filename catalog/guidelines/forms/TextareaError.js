import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const TextareaError = ({ title, label }) => {
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
            <textarea rows="3" cols="25" id="vf_textarea_input" className="vf-input vf-input--error"></textarea>
            <label for="vf_textarea_input">Textarea Label</label>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-input-container">
            <textarea
              rows="3"
              cols="25"
              id="vf_textarea_input"
              className={`vf-input vf-input--error vf-input--data ${styles.standardErrorHover}`}
              defaultValue="Textarea label filled in"
            ></textarea>
            <label for="vf_textarea_input">Textarea Label</label>
          </div>
        </Column>
        <div className="vf-col"></div>
        <div className="vf-col"></div>
      </div>
    </Fragment>
  );
};

export default TextareaError;
