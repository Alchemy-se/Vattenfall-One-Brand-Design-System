import React from "react";
import ReactMarkdown from "react-markdown";
import Heading from "./headingRenderer";
import Code from "./codeRenderer"
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
import { useEffect } from 'react';

const useScript = url => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		}
	}, [url]);
};

const Markdown = ({source}) => {
	useScript("/js/horizon.min.js");
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