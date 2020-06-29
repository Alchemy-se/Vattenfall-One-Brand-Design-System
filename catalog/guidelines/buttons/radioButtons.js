import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

const RadioButtons = ({ label }) => (
  <Fragment>
    <div className="vf-row">
      <Column title={'Default'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.disableHover}`} disabled>
          {label}
        </button>
      </Column>
      <Column title={'Hover'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.disableHover}`} disabled>
          {label}
        </button>
      </Column>
      <Column title={'Active'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.disableHover}`} disabled>
          {label}
        </button>
      </Column>
      <Column title={'Disabled'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.disableHover}`} disabled>
          {label}
        </button>
      </Column>
    </div>
  </Fragment>
);

export default RadioButtons;
