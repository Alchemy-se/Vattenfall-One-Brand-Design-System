import React from "react";
import styles from "./index.scss";

const NewsletterBox = () => {
  return (
    <div className={styles.container}>

      <div className={styles.text}>Sign up <br />for the <br />Newsletter</div>

       <div className={styles.arrowContainer}>
        <a href="mailto:branding@vattenfall.com" />
      </div>
    </div>
  )
};

export default NewsletterBox;
