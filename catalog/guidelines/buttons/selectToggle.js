import Column from '../Column';
import React, { Fragment } from 'react';

const SelectToggle = ({ label }) => (
  <Fragment>
    <div className="vf-row">
      <Column title={'Default'}>
        <img style={{ width: '58px', display: 'block' }} src={'/img/guidelines/buttons/ToggleDefault.png'} />
      </Column>
      <Column title={'Hover'}>
        <img style={{ width: '58px', display: 'block' }} src={'/img/guidelines/buttons/ToggleHover.png'} />
      </Column>
      <Column title={'Active'}>
        <img style={{ width: '58px', display: 'block' }} src={'/img/guidelines/buttons/TogglePressed.png'} />
      </Column>
      <Column title={'Disabled'}>
        <img style={{ width: '58px', display: 'block' }} src={'/img/guidelines/buttons/ToggleDisabled.png'} />
      </Column>
    </div>
  </Fragment>
);

export default SelectToggle;
