import React, { Fragment } from 'react';

import styles from './Grid.scss';

const GridSpecification = ({ device, width, totalWidth, offset, columns, gutterWidth, columnsWidth }) => {
  return (
    <Fragment>
      <div className="vf-col">
        <div style={{ width: '150px', paddingRight: '24px', display: 'inline-block' }}
             className={styles.gridSpecification}>
          <h4 className="use-in-toc-grid" id={device + "-" + width}>{device}</h4>
          <div className={styles.spacer} />
          <p>Total width</p>
          <p>Offset</p>
          <p>Columns</p>
          <p>Gutter width</p>
          <p>Column width</p>
        </div>

        <div style={{ display: 'inline-block' }} className={styles.gridSpecification}>
          <h4>{width}</h4>
          <div className={styles.spacer} />
          <p style={{ fontWeight: 'bold' }}>{totalWidth}</p>
          <p style={{ fontWeight: 'bold' }}>{offset}</p>
          <p style={{ fontWeight: 'bold' }}>{columns}</p>
          <p style={{ fontWeight: 'bold' }}>{gutterWidth}</p>
          <p style={{ fontWeight: 'bold' }}>{columnsWidth}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default GridSpecification;
