import React, { Fragment } from 'react';

const ColourSpec = ({ name, hex, rgb }) => {
  return (
    <Fragment>
      <div className="vf-col" style={{minWidth: "225px", maxWidth: "264px"}}>
        <div style={{ backgroundColor: hex, height: '180px' }} className="colourPreview"></div>
        <p style={{ fontWeight: 'bold', marginBottom: 0 }}>{name}</p>
        <div>
          <div style={{ width: '72px', paddingRight: '24px', display: 'inline-block' }}>
            <p style={{marginBottom: 0}}>HEX</p>
            <p style={{marginBottom: 0}}>RGB</p>
          </div>
          <div style={{ display: 'inline-block' }}>
            <p style={{marginBottom: 0}}>{hex}</p>
            <p style={{marginBottom: 0}}>{rgb}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ColourSpec;
