import React, { Fragment } from 'react';

const MobilePortalDetails = () => {
  return (
    <Fragment>
      <h4 className='use-in-toc'>Mobile / Portal with details</h4>
      <p>text about Mobile / Portal with details...</p>
      <div className='vf-horizontal-steppers--container' style={containerStyle}>
        <div className='vf-horizontal-steppers--portal-details'>
          <div
            id='vf-horizontal-step-1'
            className='vf-horizontal-steppers--portal-details-mobile'
          ></div>
          <label htmlFor='vf-horizontal-step-1'>Details</label>
          <div
            id='vf-horizontal-step-2'
            className='vf-horizontal-steppers--portal-details-mobile vf-horizontal-steppers--active-portal-details-mobile'
          ></div>
          <label htmlFor='vf-horizontal-step-2'>Details</label>
          <div
            id='vf-horizontal-step-3'
            className='vf-horizontal-steppers--portal-details-mobile'
          ></div>
          <label htmlFor='vf-horizontal-step-3'>Details</label>
          <div
            id='vf-horizontal-step-4'
            className='vf-horizontal-steppers--portal-details-mobile'
          ></div>
          <label htmlFor='vf-horizontal-step-4'>Details</label>
        </div>
      </div>
    </Fragment>
  );
};

const containerStyle = {
  marginBottom: '56px',
};

export default MobilePortalDetails;
