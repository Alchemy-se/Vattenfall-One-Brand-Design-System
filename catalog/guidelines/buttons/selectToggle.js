import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

import ToggleDefault from './ToggleDefault.png';
import ToggleHover from './ToggleHover.png';
import TogglePressed from './TogglePressed.png';
import ToggleDisabled from './ToggleDisabled.png';

const SelectToggle = ({ label }) => (
  <Fragment>
    <div className="vf-row">
      <Column title={'Default'}>
        <img style={{ width: '58px', display: 'block' }} src={ToggleDefault} />
      </Column>
      <Column title={'Hover'}>
        <img style={{ width: '58px', display: 'block' }} src={ToggleHover} />
      </Column>
      <Column title={'Active'}>
        <img style={{ width: '58px', display: 'block' }} src={TogglePressed} />
      </Column>
      <Column title={'Disabled'}>
        <img style={{ width: '58px', display: 'block' }} src={ToggleDisabled} />
      </Column>
    </div>
  </Fragment>
);

export default SelectToggle;
