import ReactMarkdown from "react-markdown";
import styles from "./markdown.scss";
import React from "react";

const Markdown = ({source}) => {
	return (
		<div className={styles.container}>
			<ReactMarkdown source={source} />
		</div>
	)
};

export default Markdown;