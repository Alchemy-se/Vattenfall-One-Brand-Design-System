import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

const TextLinks = ({ title, label }) => (
  <Fragment>
    {title && (
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <p style={{ fontSize: '24px' }}>{title}</p>
        </div>
      </div>
    )}
    <div className="vf-row">
      <Column title={'Default'}>
        <p style={{ color: '#1964a3' }}>Text label</p>
      </Column>
      <Column title={'Hover'}>
        <p style={{ color: '#1e324f' }}>Text label</p>
      </Column>
      <Column title={'Active'}>
        <p style={{ color: '#1e324f' }}>Text label</p>
      </Column>
      <Column title={'Disabled'}>
        <p style={{ color: '#7d7d7d' }}>Text label</p>
      </Column>
    </div>
  </Fragment>
);

export default TextLinks;
