import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Article_1 from "./article_1";
import Article_2 from "./article_2";
import Article_3 from "./article_3";
import Article_4 from "./article_4";
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
		if(articleId === "on-a-mission-to-keep-our-brand-consistent") {
			return <Article_1/>
		} else if(articleId === "creating-a-more-consistent-ui-ux-for-the-future") {
			return <Article_2/>;
		} else if(articleId === "conversion-rate-optimisation-in-action") {
			return <Article_3/>;
		} else if(articleId === "bring-your-expertise-to-the-table") {
			return <Article_4/>
		} else {
			return <Redirect to={"/articles"}/>
		}
	}

	render() {
		return (
			<div style={{paddingBottom: "200px"}}>
				{this.renderArticle(this.props.match)}
				<div className="vf-container vf-container--tight pt-4">
					<p><a href={"/articles"} style={{fontWeight: "normal"}} className={"vf-btn vf-btn--outline-secondary"}>More articles</a></p>
				</div>
			</div>
		);
	}
}

export default Articles;
