import React from "react";
import ReactMarkdown from "react-markdown";
import Heading from "./headingRenderer";

import styles from "./index.scss";

/*
module.exports = {
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
}; */


const Code = (props) => {
	console.log("#DEBUG props #",props);
	return (
		<div className={styles.htmlContainer}>
			<div className={styles.htmlInnerContainer}>
				<div className={styles.toggle}>{"<>"}</div>
				<div className={styles.html}>
					<div dangerouslySetInnerHTML={{__html: props.value}} />
				</div>
				<div className={styles.code}>
					<pre><code>{props.value}</code></pre>
				</div>
			</div>
		</div>
	);
}

const Markdown = ({source}) => {
	return (
		<div className={`${styles.container} ${"markdown-body"}` }>
			<ReactMarkdown
				source={source}
				renderers={{heading: Heading, code: Code}}
			/>
		</div>
	)
};

export default Markdown;