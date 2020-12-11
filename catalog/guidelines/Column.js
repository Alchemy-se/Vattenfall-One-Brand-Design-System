import React from 'react';
import styles from './Guidelines.scss';
import columnStyles from './columns.scss';

const Column = ({ title, children }) => {
  return (
    <div className="vf-col" style={{maxWidth: "289px"}}>
      <p className={`${styles.guidelinesText} pb-2 vf-border-bottom-gray-200`}>{title}</p>
      {children}
    </div>
  );

};
export default Column;
