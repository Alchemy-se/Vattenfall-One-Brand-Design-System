import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import styles from "./articles.css";

function FirstArticle() {
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
		return <Redirect push to={"/articles/on-a-mission-to-keep-our-brand-consistent"}/>
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
									src="./img/articles/article_01_small.jpg"
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
									On a mission to keep our brand consistent
								</h3>
							</div>
							<div className={styles.abstract}>
								<p>{truncateText("The Digital Design System (DDS) exists to help us create user-focused digital experiences that are recognisably Vattenfall. The goal is to ensure we present a cohesive and consistent experience of Vattenfall to the world through all digital channels.")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FirstArticle;
