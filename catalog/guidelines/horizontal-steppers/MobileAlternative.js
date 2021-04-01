import React, {Fragment} from 'react'

const MobileAlternative = () => {
    return (
      <Fragment>
        <h4 className='use-in-toc'>Mobile / Alternative</h4>
        <p>
          Steps with one text label (used when more than 5 fields are needed)
        </p>
        <div
          className='vf-horizontal-steppers--container'
          style={containerStyle}
        >
          <div className='vf-horizontal-steppers--dash'>
            <div
              id='vf-horizontal-step-1'
              className='vf-horizontal-steppers--dash--alternative-mobile'
            ></div>
            <label htmlFor='vf-horizontal-step-1'>Details</label>
            <div
              id='vf-horizontal-step-2'
              className='vf-horizontal-steppers--dash--alternative-mobile'
            ></div>
            <label htmlFor='vf-horizontal-step-2'>Details</label>
            <div
              id='vf-horizontal-step-3'
              className='vf-horizontal-steppers--dash--alternative-mobile vf-horizontal-steppers--active-alternative-mobile'
            ></div>
            <label htmlFor='vf-horizontal-step-3'>Details</label>
            <div
              id='vf-horizontal-step-4'
              className='vf-horizontal-steppers--dash--alternative-mobile'
            ></div>
            <label htmlFor='vf-horizontal-step-4'>Details</label>
            <div
              id='vf-horizontal-step-5'
              className='vf-horizontal-steppers--dash--alternative-mobile'
            ></div>
            <label htmlFor='vf-horizontal-step-5'>Details</label>
            <div
              id='vf-horizontal-step-6'
              className='vf-horizontal-steppers--dash--alternative-mobile'
            ></div>
            <label htmlFor='vf-horizontal-step-6'>Details</label>
          </div>
        </div>
      </Fragment>
    );
}

const containerStyle = {
  marginBottom: '56px',
};

export default MobileAlternative
