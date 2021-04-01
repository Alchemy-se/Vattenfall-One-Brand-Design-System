import React, { Fragment } from 'react';

const MobileDefault = () => {
     return (
       <Fragment>
         <h4 className='use-in-toc'>Mobile / Default</h4>
         <p>Steps with text labes (max 5 steps)</p>
         <div
           className='vf-horizontal-steppers--container'
           style={containerStyle}
         >
           <div className='vf-horizontal-steppers--step-mobile'>
             <div
               id='vf-horizontal-step-1'
               className='vf-horizontal-steppers--bullet-default-mobile'
             >
               <span className='vf-horizontal-steppers--icon'></span>
             </div>
             <label htmlFor='vf-horizontal-step-1'>Lorem ipsum</label>
           </div>

           <div className='vf-horizontal-steppers--step-mobile'>
             <div
               id='vf-horizontal-step-2'
               className='vf-horizontal-steppers--bullet-default-mobile  vf-horizontal-steppers--active-default-mobile'
             >
               <span className='vf-horizontal-steppers--icon'></span>
             </div>
             <label htmlFor='vf-horizontal-step-2'>Lorem ipsum</label>
           </div>

           <div className='vf-horizontal-steppers--step-mobile'>
             <div
               id='vf-horizontal-step-3'
               className='vf-horizontal-steppers--bullet-default-mobile'
             >
               <span className='vf-horizontal-steppers--icon'></span>
             </div>
             <label htmlFor='vf-horizontal-step-3'>Lorem ipsum</label>
           </div>

           <div className='vf-horizontal-steppers--step-mobile'>
             <div
               id='vf-horizontal-step-4'
               className='vf-horizontal-steppers--bullet-default-mobile'
             >
               <span className='vf-horizontal-steppers--icon'></span>
             </div>
             <label htmlFor='vf-horizontal-step-4'>Lorem ipsum</label>
           </div>
         </div>
       </Fragment>
     );
};

const containerStyle = {
  marginBottom: '56px',
};

export default MobileDefault;
