import React, { Fragment } from 'react';
import PageHeader from "../pageHeader";
import styles from "./styles.scss";
import DottedDescription from "../../guidelines/DottedDescription";

const Principles = () => {
  return (
    <Fragment>
      <PageHeader title={"Principles"} />
      <div className={styles.container}>

        <img src="/img/principles/Focus.png" alt="" />
        <h3>Focused</h3>
        <div className={styles.subTitle}>
          We are focused on the message we bring across and goals we strive for.
          We create straightforward clear user interfaces.
        </div>


        <h4>Best practices</h4>
        <div className={styles.infoList}>
          <span>– Create one focal point per screen</span>
          <span>– It must be clear what the primary, secondary and tertiary messages are</span>
          <span>– Give focus when attention is needed from the user</span>
        </div>


        <img src="/img/principles/competent.png" alt="" />
        <h3>Competent</h3>
        <div className={styles.subTitle}>
          We are trustworthy and competent. We create open proof driven user interfaces.
        </div>


        <h4>Best practices</h4>
        <div className={styles.infoList}>
          <span>– The content shown will be personalised based on the users’ context</span>
          <span>– Show relevant content or data as soon as possible without the user having too many interactions</span>
          <span>– Make it clear what the users’ influence is on a green and cleaner environment, whenever possible</span>
        </div>

        <img src="/img/principles/Personal.png" alt="" />
        <h3>Competent</h3>
        <div className={styles.subTitle}>
          We are trustworthy and competent. We create open proof driven user interfaces.
        </div>

        <h4>Best practices</h4>
        <div className={styles.infoList}>
          <span>– Always substantiate statements with a burden of proof</span>
          <span>– Use the minimal number of elements to convey the message</span>
          <span>– Each interaction element on the page contributes to the users’ goal</span>
        </div>

        <img src="/img/principles/Conversational.png" alt="" />
        <h3>Conversational</h3>
        <div className={styles.subTitle}>
          How we do this? We don't inform our customer, we enable an ongoing conversation to activate them. This keeps our focus on the customer needs.
        </div>



        <h4>Best practices</h4>
        <div className={styles.infoList}>
          <span>– Always be available for questions of the user</span>
          <span>– Communicate in a way you would in real life. Ask questions and provide information in a human way</span>
          <span>– Give the user continuous feedback by using micro interactions</span>
        </div>


      </div>
    </Fragment>
  );
};

export default Principles;
