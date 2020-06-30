import React from "react";
import styles from "./Guidelines.scss";

const GuidelinesWrapper = ({children}) => (
  <div className={styles.guidelinesContainer}>
    {children}
  </div>
);

export default GuidelinesWrapper;
