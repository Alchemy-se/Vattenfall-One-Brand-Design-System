import React, { Fragment } from 'react';

import styles from './Grid.scss';

const GridSpecification = ({ device, width, totalWidth, offset, columns, gutterWidth, columnsWidth }) => {
  return (
    <Fragment>
      <div className="vf-col">
        <div className="vf-row">
          <div className={`vf-col-md-4 vf-col-lg-3 ${styles.autoWidth}`}>
            <h4>{device}</h4>
            <p>Total width</p>
            <p>Offset</p>
            <p>Columns</p>
            <p>Gutter width</p>
            <p>Column width</p>
          </div>
          <div className="vf-col">
            <h4>{width}</h4>
            <p style={{ fontWeight: 'bold' }}>{totalWidth}</p>
            <p style={{ fontWeight: 'bold' }}>{offset}</p>
            <p style={{ fontWeight: 'bold' }}>{columns}</p>
            <p style={{ fontWeight: 'bold' }}>{gutterWidth}</p>
            <p style={{ fontWeight: 'bold' }}>{columnsWidth}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GridSpecification;
