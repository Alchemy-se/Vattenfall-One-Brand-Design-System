import React from 'react';
import './Modal.css';
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
			 className={"Modal"}>
			<span className={"modal__button-close"}
				  onClick={() => {
					  props.hideModal(false)
				  }}>&times;</span>
			{props.children}
		</div>
	);
}

export default Modal;
