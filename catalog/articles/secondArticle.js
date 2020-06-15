import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import styles from "./articles.css";

function SecondArticle() {
	const [redirect, setRedirect] = useState(false);

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
		return <Redirect push to={"/article/a-digital-design-system-for-the-future"} />
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
									src="./img/articles/kriegers-flak.jpg"
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
									A Digital Design System for the future
								</h3>
							</div>
							<div className={styles.abstract}>
								<p>{truncateText("The decision to build our own DDS was based on the realization that meeting specific organizational needs is required to achieve economies of scale. Our internal review and the very valuable user feedback we've received so far form the basis for our mission to create a better system and user experience going forward. Furthermore, building our own DDS enables us to support regional initiatives whilst retaining control over the development roadmap. All in all, this means building for the future and being able to excel in creating high return on marketing efforts.")}
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
