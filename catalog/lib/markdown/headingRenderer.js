import React from "react";
import styles from "./headingRenderer.scss";

const HeadingHashLink = (rawValue) => {
	const value = rawValue.toLowerCase().replace(/ /g, "-");
	return (
		<span className={styles.anchorWrapper}>
			&nbsp;<a id={value} className={styles.anchor} href={"#"+value}>#</a>
		</span>
	);
};

const Heading = (props) => {
	switch(props.level) {
		case 1: {
			return props.children.map(child =>
				<h1 key={"heading-"+child.key} className={styles.headingContainer}>
					{child.props.value}
					{HeadingHashLink(child.props.value)}
				</h1>
			)
		}
		case 2: {
			return props.children.map(child =>
				<h2 key={"heading-"+child.key} className={styles.headingContainer}>
					{child.props.value}
					{HeadingHashLink(child.props.value)}
				</h2>
			)
		}
		case 3: {
			return props.children.map(child =>
				<h3 key={"heading-"+child.key} className={styles.headingContainer}>
					{child.props.value}
					{HeadingHashLink(child.props.value)}
				</h3>
			)
		}
		case 4: {
			return props.children.map(child =>
				<h4 key={"heading-"+child.key} className={styles.headingContainer}>
					{child.props.value}
					{HeadingHashLink(child.props.value)}
				</h4>
			);
		}
		default: {
			return <p>TEST</p>
		}
	}
}

export default Heading;