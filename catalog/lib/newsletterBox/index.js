import React from "react";
import styles from "./index.scss";

const NewsletterBox = () => {
  return (
    <div className={styles.container}>
      <div>
          <h4>Sign up<br/> for the <br/> Newsletter</h4>
      </div>
      <div className={styles.arrowContainer}>
        <a href="mailto:branding@vattenfall.com">Click here</a>
      </div>
    </div>
  )
};

export default NewsletterBox;