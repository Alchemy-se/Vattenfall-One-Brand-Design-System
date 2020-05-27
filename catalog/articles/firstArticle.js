import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import styles from "./articles.css";

function FirstArticle(props) {
	// const [share, setShare] = useState(false);
	const [redirect, setRedirect] = useState(false);

	// function toggleShareButton() {
	// 	setShare(!share)
	// }

	function getDate() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		if(dd < 10) {
			dd = '0' + dd;
		}

		if(mm < 10) {
			mm = '0' + mm;
		}
		today = yyyy + '-' + mm + '-' + dd;
		return today;
	}

	function truncateText(text) {
		return text.substring(0, 90) + "...";
	}

	function onClick() {
		setRedirect(true);
	}

	if(redirect) {
		return <Redirect push to={"/article/boosting-returns-through-brand-consistency"}/>
	}

	return (
		<div className="vf-col-md-4">
			<div className={styles.newsitem}>
				<div className={styles.newsitem_boxshadow} onClick={onClick}>
					<div className={styles.clickable_card}>
						<figure data-hascopyright="true">
							<picture className="image-col-1"
									 style={{paddingBottom: "calc(100% * 1080 / 1920)"}}>
								<img
									src="./img/articles/roof-flowers.jpg"
									alt="Rooftop meadow"
									className="loaded"/>
							</picture>
						</figure>
						<div className={styles.newsitem_content}>
							<div>
								<div className={styles.info}>
									<div className={styles.type}>News</div>
									<div className={styles.date}>{getDate()}</div>
								</div>
								<h3 className={styles.heading}>
									Boosting returns through brand
									consistency
								</h3>
							</div>
							<div className={styles.abstract}>
								<p>{truncateText("The Digital Design System (DDS) exists to help us create user-focused digital experiences that are distinctly Vattenfall. The goal is to ensure brand consistency – to present a cohesive and compliant experience of Vattenfall to the world through all digital channels which in the end will generate more sales.")}</p>
							</div>
						</div>
					</div>
					{/*<div className={styles.keywords}>*/}
					{/*	<a href="https://group.vattenfall.com/press-and-media/news--press-releases#search=Biodiversity"*/}
					{/*	   className="keyword"*/}
					{/*	   data-keyword="Biodiversity">#Biodiversity</a>*/}
					{/*	<a href="https://group.vattenfall.com/press-and-media/news--press-releases#search=Sustainability"*/}
					{/*	   className="keyword"*/}
					{/*	   data-keyword="Sustainability">#Sustainability</a>*/}
					{/*</div>*/}
					{/*<div className="pagelist-item-tools">*/}
					{/*	<div className="share-wrapper">*/}
					{/*		<button onClick={() => {*/}
					{/*			toggleShareButton()*/}
					{/*		}} data-content-id="115681"*/}
					{/*				className="share-toggle" title="Share">Share*/}
					{/*		</button>*/}
					{/*		{!share ? null : (*/}
					{/*			<div className="share-links">*/}
					{/*				<ul>*/}
					{/*					<li>*/}
					{/*						<a href="#">*/}
					{/*							<img src="/img/footer/facebook.svg" className="vf-footer__social-link"*/}
					{/*								 onError="this.onerror=null; this.src='/img/footer/facebook.png'"/>*/}
					{/*							Facebook*/}
					{/*						</a>*/}
					{/*						<a*/}
					{/*							href="https://www.facebook.com/share.php?u=https://group.vattenfall.com/press-and-media/news--press-releases/newsroom/2020/vattenfall-shares-ideas-for-biodiversity-enhancement"*/}
					{/*							className="facebook" target="_blank" rel="noopener">Facebook</a>*/}
					{/*					</li>*/}
					{/*					<li>*/}
					{/*						<a href="https://www.linkedin.com/shareArticle?url=https://group.vattenfall.com/press-and-media/news--press-releases/newsroom/2020/vattenfall-shares-ideas-for-biodiversity-enhancement"*/}
					{/*						   className="linkedin" target="_blank"*/}
					{/*						   rel="noopener">LinkedIn</a>*/}
					{/*					</li>*/}
					{/*					<li>*/}
					{/*						<a href="https://twitter.com/intent/tweet?url=https%3a%2f%2fgroup.vattenfall.com%2fpress-and-media%2fnews--press-releases%2fnewsroom%2f2020%2fvattenfall-shares-ideas-for-biodiversity-enhancement"*/}
					{/*						   className="twitter" target="_blank"*/}
					{/*						   rel="noopener">Twitter</a>*/}
					{/*					</li>*/}
					{/*					<li>*/}
					{/*						<a href="mailto:?subject=Vattenfall%20shares%20ideas%20for%20biodiversity%20enhancement&amp;body=https%3A%2F%2Fgroup.vattenfall.com%2Fpress-and-media%2Fnews--press-releases%2Fnewsroom%2F2020%2Fvattenfall-shares-ideas-for-biodiversity-enhancement"*/}
					{/*						   className="mail">E-mail</a>*/}
					{/*					</li>*/}
					{/*					<li>*/}
					{/*						<label className="copy-label">Copy url*/}
					{/*							https://group.vattenfall.com/press-and-media/news--press-releases/newsroom/2020/vattenfall-shares-ideas-for-biodiversity-enhancement<input*/}
					{/*								type="text"*/}
					{/*								value="https://group.vattenfall.com/press-and-media/news--press-releases/newsroom/2020/vattenfall-shares-ideas-for-biodiversity-enhancement"/></label>*/}
					{/*						<button className="copy success" data-content-id="115681">Copy url*/}
					{/*						</button>*/}
					{/*					</li>*/}
					{/*				</ul>*/}
					{/*			</div>*/}
					{/*		)}*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
	);
}

export default FirstArticle;
