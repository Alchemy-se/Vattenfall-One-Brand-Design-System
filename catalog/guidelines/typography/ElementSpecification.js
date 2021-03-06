import React, { Fragment } from 'react';
import styles from "./Typography.scss";

const ElementSpeifications = ({ screenSize, fontName, fontWeight, fontSize, lineHeight }) => {
  return (
    <Fragment>
      <div className="vf-col">
        <h4>{screenSize}</h4>
        <div className={`vf-row ${styles.elementSpecifications}`}>
          <div className="vf-col-3" style={{minWidth: "118px"}}>
            <p>Font</p>
            <p>Font-Weight</p>
            <p>Font-size</p>
            <p>Line-height</p>
          </div>
          <div className="vf-col">
            <p style={{ fontWeight: 'bold' }}>{fontName}</p>
            <p style={{ fontWeight: 'bold' }}>{fontWeight}</p>
            <p style={{ fontWeight: 'bold' }}>{fontSize}</p>
            <p style={{ fontWeight: 'bold' }}>{lineHeight}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ElementSpeifications;
