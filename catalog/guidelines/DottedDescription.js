import React from 'react';
import styles from './Guidelines.scss';

const DottedDescription = ({ title, text, dottedLines, useInToc = true }) => {
  return (
    <div className="vf-row w-75">
      <div className="vf-col">
        {title && useInToc ? <h2 className="use-in-toc">{title}</h2> : <h2>{title}</h2>}
        <p className={styles.guidelinesText} style={{ margin: 0 }}>
          {text}
        </p>
        <ul className="vf-ul">
          {dottedLines.map((dottedLine, index) => {
            return (<li style={{ paddingTop: 0, paddingBottom: 0 }} key={"dottedline-" + index}>{dottedLine}</li>);
          })}
        </ul>
      </div>
    </div>
  );
};
export default DottedDescription;
