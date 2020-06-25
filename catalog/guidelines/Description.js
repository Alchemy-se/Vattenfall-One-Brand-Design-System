import React from 'react';
import styles from '../Guidelines.scss';

const Description = ({ title, leftText, rightText }) => {
  return (
    <div className="vf-row">
      <div className="vf-col">
        <h3>Primary Buttons</h3>
        <p className={styles.guidelinesText}>
          Buttons comes in two sizes, Lrge 52px and Medium 40px. <br />
          The large button is our main button used as default
        </p>
      </div>
      <div className="vf-col">
        <h3>&nbsp;</h3>
        <p className={styles.guidelinesText}>The distance between two parallell butons shall always be 24px.</p>
      </div>
    </div>
  );
};
export default Description;
