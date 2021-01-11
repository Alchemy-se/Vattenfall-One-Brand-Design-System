import React from "react";
import styles from "./index.scss";
const NewsletterBox = () => {
  const subject = "Sign up for the DDS Newsletter";
  const body = "Please sign me up with these contact details for the Digital Design System Newsletter.";
  return (
    <div onClick={() => location.href = `mailto:branding@vattenfall.com?subject=${subject}&body=${body}`

    } className={styles.container}>

      <div className={styles.text}>Sign up <br />for the <br />Newsletter</div>

      <div className={styles.arrowContainer}>

        <a />
      </div>
    </div>

  )
};

export default NewsletterBox;
