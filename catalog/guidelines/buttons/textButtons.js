import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

const TextButtons = ({ title, label }) => (
  <Fragment>
    {title && <div className="vf-row">
      <div style={{ margin: '0' }} className="vf-col">
        <p style={{ fontSize: '24px' }}>{title}</p>
      </div>
    </div>}
    <div className="vf-row">
      <Column title={'Default'}>
        <a href="#" className="vf-link-with-arrow">
          {label}
        </a>
        <div className="vf-pb-sm" />
        <a href="#" className="vf-link-with-arrow vf-link-with-arrow--small">
          {label}
        </a>
      </Column>
      <Column title={'Hover'}>
        <a href="#" className={`vf-link-with-arrow ${styles.textButtonHover}`}>
          {label}
        </a>
        <div className="vf-pb-sm" />
        <a href="#" className={`vf-link-with-arrow vf-link-with-arrow--small ${styles.textButtonHover}`}>
          {label}
        </a>
      </Column>
      <Column title={'Active'}>
        <a href="#" className={`vf-link-with-arrow ${styles.textButtonActive}`}>
          {label}
        </a>
        <div className="vf-pb-sm" />
        <a href="#" className={`vf-link-with-arrow vf-link-with-arrow--small ${styles.textButtonSmallActive}`}>
          {label}
        </a>
      </Column>
      <div className="vf-col"></div>
    </div>
  </Fragment>
);

export default TextButtons;
