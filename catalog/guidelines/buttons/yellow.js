import Column from "../Column";
import styles from "../../Guidelines.scss";
import React from "react";

const YellowButtons = () => (
	<div className="vf-row">
		<Column title={"Default"}>
			<button type="button" className="vf-btn vf-btn--lg vf-btn--primary">Yellow button</button>
			<div className="pb-2"/>
			<button type="button" className="vf-btn vf-btn--md vf-btn--primary">Yellow button</button>
		</Column>
		<Column title={"Hover"}>
			<button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonHover}`}>Yellow button</button>
			<div className="pb-2"/>
			<button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonHover}`}>Yellow button</button>
		</Column>
		<Column title={"Active"}>
			<button type="button" className={`vf-btn vf-btn--lg vf-btn--primary ${styles.yellowButtonActive}`}>Yellow button</button>
			<div className="pb-2"/>
			<button type="button" className={`vf-btn vf-btn--md vf-btn--primary ${styles.yellowButtonActive}`}>Yellow button</button>
		</Column>
		<Column title={"Disabled"}>
			<button type="button" className="vf-btn vf-btn--lg vf-btn--primary" disabled>Yellow button</button>
			<div className="pb-2"/>
			<button type="button" className="vf-btn vf-btn--md vf-btn--primary" disabled>Yellow button</button>
		</Column>
	</div>
);

export default YellowButtons;