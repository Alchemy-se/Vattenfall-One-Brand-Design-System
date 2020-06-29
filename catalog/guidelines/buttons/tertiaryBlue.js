import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

const BlueButtons = ({ title, label }) => (
  <Fragment>
    <div className="vf-row">
      <div style={{ margin: '0' }} className="vf-col">
        <p style={{ fontSize: '24px' }}>{title}</p>
      </div>
    </div>
    <div className="vf-row">
      <Column title={'Default'}>
        <button type="button" className="vf-btn vf-btn--lg vf-btn--outline-secondary">
          {label}
        </button>
        <div className="pb-2" />
        <button type="button" className="vf-btn vf-btn--md vf-btn--outline-secondary">
          {label}
        </button>
      </Column>
      <Column title={'Hover'}>
        <button
          type="button"
          className={`vf-btn vf-btn--lg vf-btn--outline-secondary ${styles.tertiaryBlueButtonHover}`}
        >
          {label}
        </button>
        <div className="pb-2" />
        <button
          type="button"
          className={`vf-btn vf-btn--md vf-btn--outline-secondary ${styles.tertiaryBlueButtonHover}`}
        >
          {label}
        </button>
      </Column>
      <Column title={'Active'}>
        <button
          type="button"
          className={`vf-btn vf-btn--lg vf-btn--outline-secondary ${styles.tertiaryBlueButtonActive}`}
        >
          {label}
        </button>
        <div className="pb-2" />
        <button
          type="button"
          className={`vf-btn vf-btn--md vf-btn--outline-secondary ${styles.tertiaryBlueButtonActive}`}
        >
          {label}
        </button>
      </Column>
      <Column title={'Disabled'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--outline-secondary ${styles.disableHover}`} disabled>
          {label}
        </button>
        <div className="pb-2" />
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--outline-secondary ${styles.disableHover}`} disabled>
          {label}
        </button>
      </Column>
    </div>
  </Fragment>
);

export default BlueButtons;
