import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

import RadioDefault from './RadioDefault.png';
import RadioDisabled from './RadioDisabled.png';
import RadioHover from './RadioHover.png';
import RadioPressed from './RadioPressed.png';

const RadioButtons = ({ label }) => (
  <Fragment>
    <div className="vf-row">
      <Column title={'Default'}>
        <img style={{ width: '28px', display: 'block' }} src={RadioDefault} />
      </Column>
      <Column title={'Hover'}>
        <img style={{ width: '28px', display: 'block' }} src={RadioHover} />
      </Column>
      <Column title={'Active'}>
        <img style={{ width: '28px', display: 'block' }} src={RadioPressed} />
      </Column>
      <Column title={'Disabled'}>
        <img style={{ width: '28px', display: 'block' }} src={RadioDisabled} />
      </Column>
    </div>
  </Fragment>
);

export default RadioButtons;
