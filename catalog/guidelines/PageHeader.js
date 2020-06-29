import React from "react";
import styles from "./pageHeader.scss";

const PageHeader = ({title}) => (
	<div className={styles.container}>
		<div className={styles.innerContainer}>
			<h1>{title}</h1>
		</div>
	</div>
);

export default PageHeader;
