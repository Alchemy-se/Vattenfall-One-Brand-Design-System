import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const UnderlineDropbox = ({ title, label }) => {
  return (
    <Fragment>
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`vf-row ${styles.openDropdownMinHeight}`}>
        <Column title={'Default'}>
          <div className={`vf-dropdown vf-dropdown--underline ${styles.fullWidth}`} data-control="vf-dropdown-data">
            <label className="vf-dropdown-label">Select option</label>
            <div className="vf-dropdown-list">
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Spring</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Summer</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Autumn</label>
              </div>
            </div>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className={`vf-dropdown vf-dropdown--underline ${styles.fullWidth} ${styles.underlineDropboxHover}`}>
            <label className="vf-dropdown-label">Spring</label>
            <div className="vf-dropdown-list">
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Spring</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Summer</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Autumn</label>
              </div>
            </div>
          </div>
        </Column>
        <Column title={'Focus'}>
          <div
            className={`vf-dropdown on vf-dropdown--underline  ${styles.disableHover} ${styles.fullWidth}`}
            data-control="vf-dropdown-data"
          >
            <label className="vf-dropdown-label">Select option</label>
            <div className="vf-dropdown-list">
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className={`vf-dropdown-list-item ${styles.underlineDropboxSelectedOption}`}>
                <label className="vf-dropdown-option">Spring</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Summer</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Autumn</label>
              </div>
            </div>
          </div>
        </Column>
        <Column title={'Selected'}>
          <div className={`vf-dropdown vf-dropdown--underline ${styles.fullWidth} ${styles.underlineDropboxHover}`}>
            <label className="vf-dropdown-label">Spring</label>
            <div className="vf-dropdown-list">
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Spring</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Summer</label>
              </div>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Autumn</label>
              </div>
            </div>
          </div>
        </Column>
      </div>
    </Fragment>
  );
};

export default UnderlineDropbox;
