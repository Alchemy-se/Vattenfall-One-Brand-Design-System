import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import styles from "./articles.css";

function SecondArticle() {
	const [redirect, setRedirect] = useState(false);

	function getDate() {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1;
		let yyyy = today.getFullYear();
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
		return <Redirect push to={"/articles/creating-a-more-consistent-ui-ux-for-the-future"} />
	}

	return (
		<div className="vf-col-md-4">
			<div className={styles.newsitem}>
				<div className={styles.newsitem_boxshadow} onClick={onClick}>
					<div className={styles.clickable_card} >
						<figure data-hascopyright="true">
							<picture className="image-col-1"
									 style={{paddingBottom: "calc(100% * 1080 / 1920)"}}>
								<img
									src="./img/articles/article_02_small.jpg"
									alt=""
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
									Creating a more consistent UI/UX for the future
								</h3>
							</div>
							<div className={styles.abstract}>
								<p>{truncateText("The DDS is built on the overarching goal of achieving brand consistency while meeting specific organisational and regional needs for design elements and code. Over time, we generate a growing library of cost-saving solutions. A win-win-win type of set up that benefits the brand, serves our users, and has a positive impact on finances.Over the past months, an internal review and the very valuable user feedback we've received so far have formed the basis for our mission to create a better system and user experience going forward.")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SecondArticle;
