import algoliasearch from 'algoliasearch';
import React, { useEffect, useState } from "react";
import { Highlight } from "react-instantsearch-dom";
import styles from "./styles.scss";
import PageHeader from "../pageHeader";

const APPLICATION_KEY = process.env.APPLICATION_KEY;
const PUBLIC_SEARCH_KEY = process.env.PUBLIC_SEARCH_KEY
const INDEX_NAME = process.env.INDEX_NAME

const searchClient = algoliasearch(APPLICATION_KEY, PUBLIC_SEARCH_KEY);
const index = searchClient.initIndex(INDEX_NAME);


const FullSearchResult = (props) => {
  const [result, setResult] = useState([])
  let query;

  if (props.location && props.location.search !== "") {
    query = props.location.search.slice(3);
    query = query.replace("%20", " ")

  }

  useEffect(() => {
    if (query) {
      index.search(query, {
        hitsPerPage: 100,
      }).then(({ hits }) => {
        setResult(hits);
      });
    }
  }, [query]);

  const goToResult = (uri) => {
    window.location.href = uri;

  }
  const renderResult = () => {

    if (result.length >= 1) {
      return result.map((hit, index) => {

        const subtitle = hit.parent && hit.parent.length > 0 && hit.parent.map(p => p.name) + " > ";
        return (
          <div onClick={() => goToResult(hit.uri)} className={styles.resultContainer} key={index}>
            <div className={styles.category}>
              <span>{hit.type}</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.highlightContainer}>
              {subtitle &&
              <span className={styles.subtitle}>{subtitle}</span>
              }
              <span>{hit.name}</span>

            </div>
          </div>
        )
      })

    }


    return "Nothing here. Please try again."
  }


  return (
    <div>
      <PageHeader title={'Search result'} />

      <div style={{ marginBottom: '100px' }} className={styles.container}>
        {renderResult()}
      </div>
    </div>
  );
};

export default FullSearchResult;



