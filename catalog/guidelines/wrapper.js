import React, {useEffect} from "react";
import styles from "./Guidelines.scss";

const GuidelinesWrapper = ({children}) => {
  useEffect(() => {
    // Scroll top on navigation change.
    const scrollableElement = document.getElementById("content-container");
    if(scrollableElement) {
      scrollableElement.scrollTo(0,0);
    }
  }, []);
  return (
    <div className={styles.guidelinesContainer}>
      {children}
    </div>
  );
}

export default GuidelinesWrapper;
