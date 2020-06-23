import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import styles from "./articles.css";

function ThirdArticle() {
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
		return <Redirect push to={"/articles/conversion-rate-optimisation-in-action"}/>
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
									src="./img/articles/article_03_small.jpg"
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
									Conversion rate optimisation in action
								</h3>
							</div>
							<div className={styles.abstract}>
								<p>{truncateText("Optimising conversion through motion and social media is an effective way to make your marketing more fruitful without raising marketing spend. Being a fast-moving medium with very little patience or viewing time, we need to balance and prioritise between message (clarity) and sender (identification).")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ThirdArticle;
