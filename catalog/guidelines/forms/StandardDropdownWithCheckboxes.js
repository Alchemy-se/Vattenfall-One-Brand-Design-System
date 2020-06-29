import React, { Fragment } from 'react';
import Column from '../Column';
import styles from './Forms.scss';

const StandardDropdownWithCheckboxes = ({ title, label }) => {
  return (
    <Fragment>
      <div className="vf-row">
        <div style={{ margin: '0' }} className="vf-col">
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`vf-row ${styles.openDropdownMinHeight}`}>
        <Column title={'Default'}>
          <div className="vf-dropdown" data-control="vf-dropdown-data">
            <label className="vf-dropdown-label">Select option</label>
            <div className="vf-dropdown-list">
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Winter" />
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Spring" />
                <label className="vf-dropdown-option">Spring</label>
              </div>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Summer" />
                <label className="vf-dropdown-option">Summer</label>
              </div>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Autumn" />
                <label className="vf-dropdown-option">Autumn</label>
              </div>
            </div>
          </div>
        </Column>
        <Column title={'Hover'}>
          <div className="vf-dropdown" data-control="vf-dropdown-data">
            <label className={`vf-dropdown-label ${styles.dropdownHover}`}>Select option</label>
            <div className="vf-dropdown-list">
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Winter" />
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Spring" />
                <label className="vf-dropdown-option">Spring</label>
              </div>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Summer" />
                <label className="vf-dropdown-option">Summer</label>
              </div>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Autumn" />
                <label className="vf-dropdown-option">Autumn</label>
              </div>
            </div>
          </div>
        </Column>
        <Column title={'Focus'}>
          <div className={`vf-dropdown on ${styles.disableHover}`} data-control="vf-dropdown-data">
            <label className="vf-dropdown-label">Select option</label>
            <div className={`vf-dropdown-list ${styles.disableHover}`}>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Winter" />
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className={`vf-dropdown-list-item ${styles.dropdownSelectedOption}`}>
                <input type="checkbox" checked name="vf-dropdown-group" value="Spring" />
                <label className="vf-dropdown-option">Spring</label>
              </div>
              <div className={`vf-dropdown-list-item ${styles.dropdownSelectedOption}`}>
                <input type="checkbox" checked name="vf-dropdown-group" value="Summer" />
                <label className="vf-dropdown-option">Summer</label>
              </div>
              <div className="vf-dropdown-list-item">
                <input type="checkbox" name="vf-dropdown-group" value="Autumn" />
                <label className="vf-dropdown-option">Autumn</label>
              </div>
            </div>
          </div>
        </Column>
        <Column title={'Selected'}>
          <div className={`vf-dropdown ${styles.disableHover}`} data-control="vf-dropdown-data">
            <label className="vf-dropdown-label">2 Selected</label>
            <div className={`vf-dropdown-list ${styles.disableHover}`}>
              <div className="vf-dropdown-list-item">
                <label className="vf-dropdown-option">Winter</label>
              </div>
              <div className={`vf-dropdown-list-item`}>
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

export default StandardDropdownWithCheckboxes;
