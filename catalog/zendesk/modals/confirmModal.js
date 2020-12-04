import React, { useEffect, useRef } from 'react';
import styles from '../styles.scss'
import { useDetectOutsideClick } from "../../../helpers/hooks/custom-hooks";

const ConfirmModal = ({ setDisplayConfirmModal, status }) => {
    const checkMark = require('../../../assets/icons/VF_check_rgb.svg').default;
    const alert = require('../../../assets/icons/VF_alert_rgb.svg').default;
    const close = require('../../../assets/icons/close.png').default;
    let header;
    let body;
    let icon;

    const ref = useRef(null);
    const isClickedOutside = useDetectOutsideClick(ref)

  useEffect(() => {
      if (isClickedOutside) {
        setDisplayConfirmModal(false)
      }
    }, [isClickedOutside]);


    if (status === 201) {
      header = 'Thank you for submitting your request.';
      body = "A confirmation email has been sent to you. We will review your request and get back to you within five working days regarding the next steps.";
      icon = checkMark
    } else if (status === 429) {
      header = "To many requests.";
      body = "The maximum amount of requests to the ticket system has exceeded. Please try again later.";
      icon = alert
    } else {
      header = "We've run into an issue.";
      body = "Something went wrong processing your request, please try again later.";
      icon = alert
    }


    return (
      <div ref={ref} className={styles.confirmModalContainer}>
        <div className={styles.content}>
          <img className={styles.closeButton} onClick={() => setDisplayConfirmModal(false)} src={close} alt="" />
          <div className={styles.header}><h3>{header}</h3></div>
          <div className={styles.checkMark}><img src={icon} alt="" /></div>
          <div className={styles.body}>
            <span>{body}</span>
          </div>
        </div>

      </div>
    );
  }
;

export default ConfirmModal;
