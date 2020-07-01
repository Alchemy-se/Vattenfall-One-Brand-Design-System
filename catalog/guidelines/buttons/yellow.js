import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

const YellowButtons = ({ title, label }) => (
  <Fragment>
    <div className="vf-row w-75">
      <div style={{ margin: '0' }} className="vf-col">
        <h4>{title}</h4>
        <p>{`The yellow button indicated our main focus action. There is only one yellow button per component. If you need more buttons in one component, use secondary buttons`}</p>
      </div>
    </div>
    <div className="vf-row">
      <Column title={'Default'}>
        <button type="button" className="vf-btn vf-btn--lg vf-btn--primary">
          {label}
        </button>
        <div className="vf-pb-sm" />
        <button type="button" className="vf-btn vf-btn--md vf-btn--primary">
          {label}
        </button>
      </Column>
      <Column title={'Hover'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonHover}`}>
          {label}
        </button>
        <div className="vf-pb-sm" />
        <button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonHover}`}>
          {label}
        </button>
      </Column>
      <Column title={'Active'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonActive}`}>
          {label}
        </button>
        <div className="vf-pb-sm" />
        <button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonActive}`}>
          {label}
        </button>
      </Column>
      <Column title={'Disabled'}>
        <button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.disableHover}`} disabled>
          {label}
        </button>
        <div className="vf-pb-sm" />
        <button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.disableHover}`} disabled>
          {label}
        </button>
      </Column>
    </div>
  </Fragment>
);

export default YellowButtons;
