import React from 'react';
import styles from './Guidelines.scss';

const DottedDescription = ({ title, text, dottedLines }) => {
    return (
      <div className="vf-row w-75">
        <div className="vf-col">
          {title && <h2>{title}</h2>}
          <p className={styles.guidelinesText} style={{margin: 0}}>
            {text}
          </p>
          <ul className="vf-ul">
            {dottedLines.map(dottedLine => {
              return (<li style={{paddingTop: 0, paddingBottom: 0}}>{dottedLine}</li>);
            })}
          </ul>
        </div>
      </div>
    );
};
export default DottedDescription;
