import React from 'react';
import Articles from "./index";
import styles from "./articles.scss";

ArticlesOverview.propTypes = {};

function ArticlesOverview() {

	return (
		<div className={styles.__articles}>
			<div className={styles.vf_container_custom}>
				<div
					className={`${styles.pagelistblock_list} pagelistblock-list pt-3 pb-3 light-blue vf-row pagelist-item-count-6`}>
					<Articles/>
				</div>
			</div>
		</div>
	);
}

export default ArticlesOverview;
