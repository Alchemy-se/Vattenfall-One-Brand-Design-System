import React, { Fragment } from 'react';

const Circle = ({ color, colorName, border, percentage }) => {
  return (
    <Fragment>
      <div className="vf-col">
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
        {colorName && <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{colorName}</p>}
        {color && <p style={{ textAlign: 'center' }}>{percentage ? percentage : color}</p>}
      </div>
    </Fragment>
  );
};

export default Circle;
