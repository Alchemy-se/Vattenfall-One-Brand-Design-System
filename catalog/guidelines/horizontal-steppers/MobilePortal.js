import React, { Fragment } from 'react';

const MobilePortal = () => {
   return (
     <Fragment>
       <h4 className='use-in-toc'>Mobile / Portal</h4>
       <p>
         Steps based on the progress bar, can be combined with a text label
         displaying steps and detail (used in portal) Lenght of blue bar is
         determined through division of steps that being used. Below a 4 step
         example. Placement of text could be placed above as below and 14 or
         16px size depending on usage.
       </p>
       <div
         className='vf-horizontal-steppers--container'
         style={containerStyle}
       >
         <div className='vf-horizontal-steppers--portal'>
           <div
             id='vf-horizontal-step-1'
             className='vf-horizontal-steppers--portal-mobile'
           ></div>
           <div
             id='vf-horizontal-step-2'
             className='vf-horizontal-steppers--portal-mobile vf-horizontal-steppers--active-portal-mobile'
           ></div>
           <div
             id='vf-horizontal-step-3'
             className='vf-horizontal-steppers--portal-mobile'
           ></div>
           <div
             id='vf-horizontal-step-4'
             className='vf-horizontal-steppers--portal-mobile'
           ></div>
         </div>

         <div
           className='vf-horizontal-steppers--portal-details'
           style={portalStyle}
         >
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

const portalStyle = {
  marginLeft: "56px"
}

const containerStyle = {
  marginBottom: '56px',
};

export default MobilePortal;
