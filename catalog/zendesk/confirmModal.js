import React, { useEffect, useRef } from 'react';
import styles from './styles.scss'
import { useDetectOutsideClick } from "../../helpers/hooks/custom-hooks";

const ConfirmModal = ({ handleModal }) => {
    const checkMark = require('../../assets/icons/VF_check_rgb.svg').default;
    const close = require('../../assets/icons/close.png').default;
    const ref = useRef(null);

    const isClickedOutside = useDetectOutsideClick(ref)
    useEffect(() => {
      if (isClickedOutside) {
        handleModal(false)
      }
    }, [isClickedOutside])



    return (
      <div ref={ref} className={styles.confirmModalContainer}>
        <div className={styles.content}>
          <img className={styles.closeButton} onClick={() => handleModal(false)} src={close} alt="" />
          <div className={styles.header}><h3>Thank you for your request.</h3></div>
          <div className={styles.checkMark}><img src={checkMark} alt="" /></div>
          <div className={styles.body}>
          <span>A confirmation email is sent to you.
            Your order will be processed in 3 to 5 working days.</span>
          </div>
        </div>

      </div>
    );
  }
;

export default ConfirmModal;
