import React, {Component} from "react";
import Markdown from "../lib/markdown/index";
import PageHeader from "../lib/pageHeader";

export default class DynamicView extends Component {
	componentDidMount() {
		this.scrollToHashId()
	}

	componentDidUpdate() {
		this.scrollToHashId()
	}

	scrollToHashId() {
		const removeHash = this.removeHash;
		const hash = window.location.hash.substring(1);
		if(hash && hash.length) {
			setTimeout(
				window.requestAnimationFrame(function () {
					const el = document.getElementById(hash);
					if(!el) {
						removeHash();
						return;
					}
					el.scrollIntoView(true);
				}),
				0
			)
		}
	}

	removeHash() {
		const loc = window.location;
		const hist = window.history;

		if(hist && 'pushState' in hist) {
			hist.replaceState('', document.title, loc.pathname + loc.search);
		} else {
			const scrollV = document.body.scrollTop;
			const scrollH = document.body.scrollLeft;

			loc.hash = '';

			document.body.scrollTop = scrollV;
			document.body.scrollLeft = scrollH;
		}
	}

	render() {
		return (
			<React.Fragment>
				<PageHeader title={this.props.title}/>
				<Markdown source={this.props.mdFile} />
			</React.Fragment>
		)
	}
};