import React, {Component} from "react";
import Prism from "prismjs";
import { safeLoad, CORE_SCHEMA, Type, Schema } from 'js-yaml';
import ResponsiveTabs from "./responsiveTabs";
import styles from "./index.scss";

var INITIAL_SEPARATOR = /[ \t]*---[ \t]*\n/;
var SEPARATOR = /\n[ \t]*---[ \t]*\n/;
var splitText = function splitText(text) {
	var matched = text.match(INITIAL_SEPARATOR);
	if (matched && matched.index === 0) {
		return [void 0, text.slice(matched[0].length)];
	}
	matched = text.match(SEPARATOR);
	return matched && matched.index > -1 ? [text.slice(0, matched.index), text.slice(matched.index + matched[0].length)] : [void 0, text];
};

var parseYaml = function parseYaml(str, imports) {
	var parsed = void 0;
	try {
		var ImportType = new Type("!import", {
			kind: "scalar",
			construct: function construct(key) {
				return imports[key];
			}
		});

		var yamlOptions = {
			schema: Schema.create(CORE_SCHEMA, [ImportType])
		};

		parsed = safeLoad(str, yamlOptions);
	} catch (e) {
		parsed = void 0;
	}
	return typeof parsed === "string" ? void 0 : parsed;
};

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];

		for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}

	return target;
};

const defaultMapBodyToProps = function defaultMapBodyToProps(parsedBody, rawBody) {
	return parsedBody || rawBody;
};

const parseSpecimenBody = function parseSpecimenBody(_mapBodyToProps) {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
		let imports = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		let mapBodyToProps = defaultMapBodyToProps;
		let splitBody = splitText(body);
		let props = splitBody[0],
			children = splitBody[1];
		return mapBodyToProps(_extends({}, parseYaml(props, imports), { children: children }), body);
};

export default class CodeRenderer extends Component {
	constructor(props) {
		super(props);
		const parsed = parseSpecimenBody(props.value);
		const data = Object.assign({children: null, showSource: false, responsive: false}, parsed);
		this.state = {
			showCode: data.showSource
		};
	}

	static isToken = (t) => {
		return t instanceof Prism.Token;
	};

	static renderPrismTokens = (tokens) => {
		return tokens.map((t, i) => {
			if(CodeRenderer.isToken(t)) {
				return (
					<span className={`${styles.prismToken} ${styles[t.type]}` } key={"coderenderer-"+i+"-"+t.tag}>
					{ Array.isArray(t.content) ? CodeRenderer.renderPrismTokens(t.content, styles) : t.content}
				</span>
				);
			} else {
				return t;
			}
		});
	};

	onToggle = () => {
		this.setState({
			showCode: !this.state.showCode
		});
	};

	renderHTML = ({responsive, children}) => {
		if(responsive) {
			return <ResponsiveTabs children={children} />
		}
		return (
			<div className={styles.html}>
				<div dangerouslySetInnerHTML={{__html: children}}/>
			</div>
		);
	};

	render() {
		const {value, language} = this.props;
		const isHTML = language === "html";
		const parsed = parseSpecimenBody(value);
		const data = Object.assign({children: null, showSource: false, responsive: false}, parsed);
		const tokens = Prism.tokenize(data.children, Prism.languages.markup);
		const codeClassNames = !isHTML ? `${styles.code} ${styles.noBorder}` : styles.code;
		return (
			<div className={styles.htmlContainer}>
				<div className={styles.htmlInnerContainer}>
					{!isHTML ? null : <div className={styles.toggle} onClick={this.onToggle}>{"<>"}</div>}
					{!isHTML ? null : this.renderHTML(data)}
					{this.state.showCode || !isHTML ?
						<div className={codeClassNames}>
							<pre><code>{CodeRenderer.renderPrismTokens(tokens)}</code></pre>
						</div>
						:
						null
					}
				</div>
			</div>
		);
	}
}
