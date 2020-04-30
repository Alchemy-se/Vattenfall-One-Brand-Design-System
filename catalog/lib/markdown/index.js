import React from "react";
import ReactMarkdown from "react-markdown";
import Heading from "./headingRenderer";
import Prism from "prismjs";
console.log("#DEBUG prism #", Prism);
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

const isToken = (t) => {
	return t instanceof Prism.Token;
}

const renderPrismTokens = (tokens) => {
	return tokens.map((t,i) => {
		console.log("#DEBUG t #", t.type);
		if(isToken(t)) {
			return <span className={`${styles.prismToken} ${styles[t.type]}` }>{ Array.isArray(t.content) ? renderPrismTokens(t.content, styles) : t.content}</span>
		} else {
			return t;
		}
	});
}
// https://prismjs.com/
const Code = (props) => {
	// var lang = Prism.languages.hasOwnProperty(props.language) ? props.language : null;
	// console.log(Prism.tokenize(props.value, Prism.languages.markup));
	const tokens = Prism.tokenize(props.value, Prism.languages.markup);
	return (
		<div className={styles.htmlContainer}>
			<div className={styles.htmlInnerContainer}>
				<div className={styles.toggle}>{"<>"}</div>
				<div className={styles.html}>
					<div dangerouslySetInnerHTML={{__html: props.value}} />
				</div>
				<div className={styles.code}>
					<pre><code>{renderPrismTokens(tokens)}</code></pre>
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