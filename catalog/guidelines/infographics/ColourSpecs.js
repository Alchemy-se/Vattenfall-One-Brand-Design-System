import React, { Fragment } from 'react';

const ColourSpec = ({ name, hex, rgb }) => {
  return (
    <Fragment>
      <div className="vf-col">
        <div style={{ backgroundColor: hex, height: '180px' }} className="colourPreview"></div>
        <p style={{ fontWeight: 'bold' }}>{name}</p>
        <div>
          <div style={{ width: '72px', paddingRight: '24px', display: 'inline-block' }}>
            <p>HEX</p>
            <p>RGB</p>
          </div>
          <div style={{ display: 'inline-block' }}>
            <p>{hex}</p>
            <p>{rgb}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ColourSpec;
