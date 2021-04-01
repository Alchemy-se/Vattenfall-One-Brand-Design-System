
import React, { Fragment } from 'react';
const DesktopNumbers = () => {
    return (
      <Fragment>
        <h4 className='use-in-toc'>Desktop / Numbers</h4>
        <p>Steps with numbers and text labels (max 4 steps)</p>
        <div
          className='vf-horizontal-steppers--container'
          style={containerStyle}
        >
          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-1'
              className='vf-horizontal-steppers--bullet-numbers'
            >
              <span className='vf-horizontal-steppers--numbers'>1</span>
            </div>
            <label htmlFor='vf-horizontal-step-1'>Lorem ipsum</label>
          </div>

          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-2'
              className='vf-horizontal-steppers--bullet-numbers vf-horizontal-steppers--active-numbers'
            >
              <span className='vf-horizontal-steppers--numbers'>2</span>
            </div>
            <label htmlFor='vf-horizontal-step-2'>Lorem ipsum</label>
          </div>

          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-3'
              className='vf-horizontal-steppers--bullet-numbers'
            >
              <span className='vf-horizontal-steppers--numbers'>3</span>
            </div>
            <label htmlFor='vf-horizontal-step-3'>Lorem ipsum</label>
          </div>

          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-4'
              className='vf-horizontal-steppers--bullet-numbers'
            >
              <span className='vf-horizontal-steppers--numbers'>4</span>
            </div>
            <label htmlFor='vf-horizontal-step-4'>Lorem ipsum</label>
          </div>
        </div>
      </Fragment>
    );
}

const containerStyle = {
  marginBottom: '56px',
};

export default DesktopNumbers
