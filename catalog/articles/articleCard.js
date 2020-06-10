import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import styles from "./articles.scss";

function ArticleCard(props) {
  const [redirect, setRedirect] = useState(false);

  function getDate() {
    var today = new Date(props.article.createdAt);
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

  const article = props.article;
  if(redirect) {
    return <Redirect push to={"/article/"+article.articleId}/>
  }
  return (
    <div className="vf-col-md-4">
      <div className={styles.newsitem}>
        <div className={styles.newsitem_boxshadow} onClick={onClick}>
          <div className={styles.clickable_card}>
            <figure data-hascopyright="true">
              <picture className="image-col-1"
                       style={{paddingBottom: "calc(100% * 1080 / 1920)"}}>
                {article.cardImage && article.cardImage.url
                  ? <img
                    src={article.cardImage.url}
                    alt={article.cardImage.alternativeText}
                    className="loaded"
                  />
                  : null
                }
              </picture>
            </figure>
            <div className={styles.newsitem_content}>
              <div>
                <div className={styles.info}>
                  <div className={styles.type}>News</div>
                  <div className={styles.date}>{getDate()}</div>
                </div>
                <h3 className={styles.heading}>
                  {article.title}
                </h3>
              </div>
              <div className={styles.abstract}>
                <p>{truncateText(article.cardDescription)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
