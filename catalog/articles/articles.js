import React, {Component} from "react";
import Article_1 from "./article_1";
import Article_2 from "./article_2";
import "./articles.css";

class Articles extends Component {
	componentDidMount () {
		this.scrollToHashId()
	}

	componentDidUpdate () {
		this.scrollToHashId()
	}

	scrollToHashId () {
		const removeHash = this.removeHash;
		const hash = window.location.hash.substring(1);

		if (hash && hash.length) {
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

	removeHash () {
		const loc = window.location;
		const hist = window.history;

		if (hist && 'pushState' in hist) {
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
			<div className="__articles">
				<Article_1/>
				<div className="vf-container vf-container--tight vf-border-top-gray-200"/>
				<Article_2/>
			</div>
		);
	}
}

export default Articles;