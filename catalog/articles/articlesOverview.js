import React, { Fragment } from 'react';
import FirstArticle from "./firstArticle";
import SecondArticle from "./secondArticle";
import ThirdArticle from "./thirdArticle";
import FourthArticle from "./fourthArticle";
import styles from "./articles.css";
import PageHeader from "../lib/pageHeader";

ArticlesOverview.propTypes = {};

function ArticlesOverview() {

  return (
    <Fragment>
      <PageHeader title={"Articles"} />
      <div className={styles.__articles}>
        <div className={styles.vf_container_custom}>
          <div
            className={`${styles.pagelistblock_list} pagelistblock-list  light-blue vf-row pagelist-item-count-6`}>
            <FirstArticle />
            <SecondArticle />
            <ThirdArticle />
            <FourthArticle />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ArticlesOverview;
