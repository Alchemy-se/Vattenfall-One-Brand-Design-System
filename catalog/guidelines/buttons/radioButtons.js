import Column from '../Column';
import React, { Fragment } from 'react';

const RadioButtons = ({ label }) => (
  <Fragment>
    <div className="vf-row">
      <Column title={'Default'}>
        <img style={{ width: '28px', display: 'block' }} src={'/img/guidelines/buttons/RadioDefault.png'} />
      </Column>
      <Column title={'Hover'}>
        <img style={{ width: '28px', display: 'block' }} src={'/img/guidelines/buttons/RadioHover.png'} />
      </Column>
      <Column title={'Active'}>
        <img style={{ width: '28px', display: 'block' }} src={'/img/guidelines/buttons/RadioPressed.png'} />
      </Column>
      <Column title={'Disabled'}>
        <img style={{ width: '28px', display: 'block' }} src={'/img/guidelines/buttons/RadioDisabled.png'} />
      </Column>
    </div>
  </Fragment>
);

export default RadioButtons;
