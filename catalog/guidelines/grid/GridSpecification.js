import React, { Fragment } from 'react';

import styles from './Grid.scss';

const GridSpecification = ({ device, width, totalWidth, offset, columns, gutterWidth, columnsWidth }) => {
  return (
    <Fragment>
      <div className="vf-col">
        <div style={{ width: '150px', paddingRight: '24px', display: 'inline-block' }}>
          <h4>{device}</h4>
          <p style={{ marginBottom: '10px' }}>Total width</p>
          <p style={{ marginBottom: '10px' }}>Offset</p>
          <p style={{ marginBottom: '10px' }}>Columns</p>
          <p style={{ marginBottom: '10px' }}>Gutter width</p>
          <p style={{ marginBottom: '10px' }}>Column width</p>
        </div>

        <div style={{ display: 'inline-block' }}>
          <h4>{width}</h4>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{totalWidth}</p>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{offset}</p>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{columns}</p>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{gutterWidth}</p>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{columnsWidth}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default GridSpecification;
