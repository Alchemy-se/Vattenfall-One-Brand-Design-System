import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import styles from "./articles.css";

function FourthArticle() {
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
    return <Redirect push to={"/articles/bring-your-expertise-to-the-table"} />
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
                  src="./img/articles/article_05_small.jpg"
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
                  Bring your expertise to the table!
                </h3>
              </div>
              <div className={styles.abstract}>
                <p>{truncateText("While global brand consistency is important, it’s also important to acknowledge your local needs in different markets. To set the DDS up for long-term success and create a helpful resource, we want to involve you as well as other users and stakeholders as much as possible in the workflow. The goal is to achieve a living toolbox where we take varying needs into account, support collaboration, and engage in shared activities. Therefore, we would love your feedback, requirements and/or questions on what would help you most. Please take a couple of minutes to complete our short survey. Thanks!")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthArticle;
