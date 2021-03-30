import React, { Fragment } from 'react';

const Circle = ({ color, colorName, border, percentage, rgb }) => {
  return (
    <Fragment>
      <div className='vf-col'>
        <div
          style={{
            paddingTop: '100%',
            position: 'relative',
            backgroundColor: color,
            borderRadius: '50%',
            border: border,
          }}
        ></div>
        <p>&nbsp;</p>
        <div>
          {colorName && (
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                letterSpacing: 0,
              }}
              className='mb-0'
            >
              {colorName}
            </p>
          )}
          {color && (
            <p
              style={{ textAlign: 'center', letterSpacing: 0 }}
              className='mb-0'
            >
              {percentage ? percentage : color}
            </p>
          )}
        </div>
      </div>
    </Fragment>
  )
};

export default Circle;
