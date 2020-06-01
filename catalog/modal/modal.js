import React from 'react';
import styles from './Modal.css';
import PropTypes from 'prop-types';

Modal.propTypes = {};

/**
 * @return {null}
 */
function Modal(props) {
	return (
		<div style={{
			opacity: props.show ? 1 : 0
		}}
			 className={styles.Modal}>
			<span className={styles.modal__button_close}
				  onClick={() => {
					  props.hideModal(false)
				  }}>&times;</span>
			{props.children}
		</div>
	);
}

export default Modal;
