import React from 'react';
import styles from '../Guidelines.scss';
import columnStyles from "./columns.scss";

const Column = ({ title, children}) => {

	/*return (
		<div className="vf-col">
			<p className={`${styles.guidelinesText} pb-2 vf-border-bottom-gray-200`}>
				{title}
			</p>
			{children}
		</div>
	)*/
	return (
		<div className="vf-row">
			<div className="vf-col">
				<p className={`${styles.guidelinesText} pb-2 vf-border-bottom-gray-200`}>
					Default
				</p>
				<button type="button" className="vf-btn vf-btn--lg vf-btn--primary">Yellow button</button>
				<div className="pb-2"/>
				<button type="button" className="vf-btn vf-btn--md vf-btn--primary">Yellow button</button>
			</div>
			<div className="vf-col">
				<p className={`${styles.guidelinesText} pb-2 vf-border-bottom-gray-200`}>
					Hover
				</p>
				<button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonHover}`}>Yellow button</button>
				<button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonHover}`}>Yellow button</button>
			</div>
			<div className="vf-col">
				<p className={`${styles.guidelinesText} pb-2 vf-border-bottom-gray-200`}>
					Active
				</p>
				<button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonActive}`}>Yellow button</button>
				<button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonActive}`}>Yellow button</button>
			</div>
			<div className="vf-col">
				<p className={`${styles.guidelinesText} pb-2 vf-border-bottom-gray-200`}>
					Disabled
				</p>
				<button type="button" className="vf-btn vf-btn--lg vf-btn--primary" disabled>Yellow button</button>
				<button type="button" className="vf-btn vf-btn--md vf-btn--primary" disabled>Yellow button</button>
			</div>
		</div>
	);
};
export default Column;
