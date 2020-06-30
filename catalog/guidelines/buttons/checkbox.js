import Column from '../Column';
import React, { Fragment } from 'react';
const Checkbox = () => (
  <Fragment>
    <div className="vf-row">
      <Column title={'Default'}>
        <img style={{ width: '28px', display: 'block' }} src={'/img/guidelines/buttons/CheckboxDefault.png'} />
      </Column>
      <Column title={'Hover'}>
        <img style={{ width: '28px' }} src={'/img/guidelines/buttons/CheckboxHover.png'} />
      </Column>
      <Column title={'Active'}>
        <img style={{ width: '28px' }} src={'/img/guidelines/buttons/CheckboxPressed.png'} />
      </Column>
      <Column title={'Disabled'}>
        <img style={{ width: '28px' }} src={'/img/guidelines/buttons/CheckboxDisabled.png'} />
      </Column>
    </div>
  </Fragment>
);

export default Checkbox;
