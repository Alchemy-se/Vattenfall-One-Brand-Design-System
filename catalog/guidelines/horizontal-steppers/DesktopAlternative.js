
import React, { Fragment } from 'react';

const DesktopAlternative = () => {
    return (
      <Fragment>
        <h4 className='use-in-toc'>Desktop / Alternative</h4>
        <p>
          Steps with one text label (used when more than 4 steps are needed.
          Maximum 6 steps)
        </p>
        <div
          className='vf-horizontal-steppers--container'
          style={containerStyle}
        >
          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-1'
              className='vf-horizontal-steppers--bullet-alternative'
            >
              <span className='vf-horizontal-steppers--icon'></span>
            </div>
            <label htmlFor='vf-horizontal-step-1'>Lorem ipsum</label>
          </div>

          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-2'
              className='vf-horizontal-steppers--bullet-alternative  vf-horizontal-steppers--active-alternative'
            >
              <span className='vf-horizontal-steppers--icon'></span>
            </div>
            <label htmlFor='vf-horizontal-step-2'>Lorem ipsum</label>
          </div>

          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-3'
              className='vf-horizontal-steppers--bullet-alternative'
            >
              <span className='vf-horizontal-steppers--icon'></span>
            </div>
            <label htmlFor='vf-horizontal-step-3'>Lorem ipsum</label>
          </div>

          <div className='vf-horizontal-steppers--step'>
            <div
              id='vf-horizontal-step-4'
              className='vf-horizontal-steppers--bullet-alternative'
            >
              <span className='vf-horizontal-steppers--icon'></span>
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

export default DesktopAlternative
