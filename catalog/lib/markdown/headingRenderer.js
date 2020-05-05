import React from "react";
import styles from "./headingRenderer.scss";

const HeadingHashLink = (rawValue) => {
	if(Array.isArray(rawValue)) {
		let value = "";
		for(let i = 0; i < rawValue.length; i++) {
			value+= rawValue[i].props.value
		}
		value = value.toLowerCase().replace(/ /g, "-");
		return (
			<span className={styles.anchorWrapper}>
			&nbsp;<a id={value} className={styles.anchor} href={"#"+value}>#</a>
		</span>
		);
	}
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
		case 5: {
			return (
				<h5 key={"heading-" + props.children[0].key} className={styles.headingContainer}>
					{
						props.children.map(child => {
							if(child.props.inline) {
								return <code>{child.props.value}</code>
							}
							return child.props.value
						})
					}
					{HeadingHashLink(props.children)}
				</h5>
			);
			return props.children.map(child =>
				<h5 key={"heading-"+child.key} className={styles.headingContainer}>
					{child.props.value}
					{HeadingHashLink(child.props.value)}
				</h5>
			);
		}
		default: {
			console.error("HeadingRenderer missing case for level: ", props.level);
			return null;
		}
	}
}

export default Heading;