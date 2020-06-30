import Column from '../Column';
import styles from './Buttons.scss';
import React, { Fragment } from 'react';

import CheckboxDefault from './CheckboxDefault.png';
import CheckboxDisabled from './CheckboxDisabled.png';
import CheckboxHover from './CheckboxHover.png';
import CheckboxPressed from './CheckboxPressed.png';

const Checkbox = () => (
  <Fragment>
    <div className="vf-row">
      <Column title={'Default'}>
        <img style={{ width: '28px', display: 'block' }} src={CheckboxDefault} />
      </Column>
      <Column title={'Hover'}>
        <img style={{ width: '28px' }} src={CheckboxHover} />
      </Column>
      <Column title={'Active'}>
        <img style={{ width: '28px' }} src={CheckboxPressed} />
      </Column>
      <Column title={'Disabled'}>
        <img style={{ width: '28px' }} src={CheckboxDisabled} />
      </Column>
    </div>
  </Fragment>
);

export default Checkbox;
