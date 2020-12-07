import React from 'react';
import styles from './Guidelines.scss';

const DottedDescription = ({ title, text, dottedLines }) => {
    return (
      <div className="vf-row w-75">
        <div className="vf-col">
          {title && <h2 className="use-in-toc" >{title}</h2>}
          {text && 
            <p className={styles.guidelinesText} style={{margin: 0}}>
              {text}
            </p>
          }
          <ul className="vf-ul">
            {dottedLines.map((dottedLine, index) => {
              return (<li style={{paddingTop: 0, paddingBottom: 0}} key={"dottedline-" + index}>{dottedLine}</li>);
            })}
          </ul>
        </div>
      </div>
    );
};
export default DottedDescription;
