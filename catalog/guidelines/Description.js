import React from 'react';
import styles from './Guidelines.scss';

const Description = ({ title, text, leftText, rightText }) => {
  if (text) {
    return (
      <div className="vf-row w-75">
        <div className="vf-col ">
          {title && <h2>{title}</h2>}
          <p className={styles.guidelinesText} style={{letterSpacing:0}}>
            {text}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="vf-row">
      <div className="vf-col">
        {title && <h2>{title}</h2>}
        {leftText && <p className={styles.guidelinesText} style={{letterSpacing: 0}}>{leftText}</p>}
      </div>
      <div className="vf-col">
        {title && <h2>&nbsp;</h2>}
        {rightText && <p className={styles.guidelinesText} style={{letterSpacing: 0}}>{rightText}</p>}
      </div>
    </div>
  );
};
export default Description;
