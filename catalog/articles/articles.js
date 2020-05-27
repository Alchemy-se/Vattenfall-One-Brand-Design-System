import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Article_1 from "./article_1";
import Article_2 from "./article_2";
import styles from "./articles.css";
import ArticlesOverview from "./articlesOverview";

class Articles extends Component {

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

	renderArticle(match) {
		const articleId = match.params && match.params.articleId ? match.params.articleId : null;
		if(articleId === "boosting-returns-through-brand-consistency") {
			return <Article_1/>
		} else if(articleId === "a-digital-design-system-for-the-future") {
			return <Article_2/>;
		} else {
			return <Redirect to={"/articles"}/>
		}
	}

	render() {
		return (
			<div className={styles.__articles}>
				{this.renderArticle(this.props.match)}
			</div>
		);
	}
}

export default Articles;
