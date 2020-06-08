import React from 'react';
import PropTypes from 'prop-types';
import FirstArticle from "./firstArticle";
import SecondArticle from "./secondArticle";
import ThirdArticle from "./thirdArticle";
import Articles from "./index";
import styles from "./articles.css";

ArticlesOverview.propTypes = {};

function ArticlesOverview(props) {

	return (
		<div className={styles.__articles}>
			<div className={styles.vf_container_custom}>
				<div
					className={`${styles.pagelistblock_list} pagelistblock-list pt-3 pb-3 light-blue vf-row pagelist-item-count-6`}>
					<FirstArticle/>
					<SecondArticle/>
					<ThirdArticle/>
				</div>
			</div>
			<Articles/>
		</div>
	);
}

export default ArticlesOverview;
