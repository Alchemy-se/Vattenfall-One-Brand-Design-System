import React from 'react';
import FirstArticle from "./firstArticle";
import SecondArticle from "./secondArticle";
import ThirdArticle from "./thirdArticle";
import FourthArticle from "./fourthArticle";
import styles from "./articles.css";

ArticlesOverview.propTypes = {};

function ArticlesOverview() {
	return (
		<div className={styles.__articles}>
			<div className={styles.vf_container_custom}>
				<div
					className={`${styles.pagelistblock_list} pagelistblock-list pt-3 pb-3 light-blue vf-row pagelist-item-count-6`}>
					<FirstArticle/>
					<SecondArticle/>
					<ThirdArticle/>
					<FourthArticle/>
				</div>
			</div>
		</div>
	);
}

export default ArticlesOverview;
