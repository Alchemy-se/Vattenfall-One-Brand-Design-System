import React, { useEffect, useRef } from 'react';
import styles from './styles.scss'
import { useDetectOutsideClick } from "../../helpers/hooks/custom-hooks";

const ConfirmModal = ({ setDisplayConfirmModal, status }) => {
    const checkMark = require('../../assets/icons/VF_check_rgb.svg').default;
    const close = require('../../assets/icons/close.png').default;
    const ref = useRef(null);

    const isClickedOutside = useDetectOutsideClick(ref)
    useEffect(() => {
      if (isClickedOutside) {
        setDisplayConfirmModal(false)
      }
    }, [isClickedOutside]);

    let header;
    let body;
    if (status) {
      header = 'Thank you for your request.';
      body = "A confirmation email is sent to you. Your order will be processed in 3 to 5 working days.";
    }
    else if (status === 429) {
      header = "To many requests.";
      body = "The maximum amount of requests to the ticket system has exceeded. Please try again later."
    } else {
      header = "Something went wrong.";
      body = "Something went wrong. Please try again later or contact an admin if the error persists."
    }


    return (
      <div ref={ref} className={styles.confirmModalContainer}>
        <div className={styles.content}>
          <img className={styles.closeButton} onClick={() => setDisplayConfirmModal(false)} src={close} alt="" />
          <div className={styles.header}><h3>{header}</h3></div>
          <div className={styles.checkMark}><img src={checkMark} alt="" /></div>
          <div className={styles.body}>
            <span>{body}</span>
          </div>
        </div>

      </div>
    );
  }
;

export default ConfirmModal;
