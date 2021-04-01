import React, { Fragment } from 'react';

const MobileNumbers = () => {
   return (
     <Fragment>
       <h4 className='use-in-toc'>Mobile / Numbers</h4>
       <p>Steps with numbers and text labels (max 5 steps)</p>
       <div
         className='vf-horizontal-steppers--container'
         style={containerStyle}
       >
         <div className='vf-horizontal-steppers--step-mobile'>
           <div
             id='vf-horizontal-step-1'
             className='vf-horizontal-steppers--bullet-numbers-mobile'
           >
             <span className='vf-horizontal-steppers--numbers'>1</span>
           </div>
           <label htmlFor='vf-horizontal-step-1'>Lorem ipsum</label>
         </div>

         <div className='vf-horizontal-steppers--step-mobile'>
           <div
             id='vf-horizontal-step-2'
             className='vf-horizontal-steppers--bullet-numbers-mobile vf-horizontal-steppers--active-numbers-mobile'
           >
             <span className='vf-horizontal-steppers--numbers'>2</span>
           </div>
           <label htmlFor='vf-horizontal-step-2'>Lorem ipsum</label>
         </div>

         <div className='vf-horizontal-steppers--step-mobile'>
           <div
             id='vf-horizontal-step-3'
             className='vf-horizontal-steppers--bullet-numbers-mobile'
           >
             <span className='vf-horizontal-steppers--numbers'>3</span>
           </div>
           <label htmlFor='vf-horizontal-step-3'>Lorem ipsum</label>
         </div>

         <div className='vf-horizontal-steppers--step-mobile'>
           <div
             id='vf-horizontal-step-4'
             className='vf-horizontal-steppers--bullet-numbers-mobile'
           >
             <span className='vf-horizontal-steppers--numbers'>4</span>
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

export default MobileNumbers;
