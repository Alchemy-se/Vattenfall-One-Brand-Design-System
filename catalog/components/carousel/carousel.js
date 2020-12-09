import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import standard from './standard/html/carousel.md'
import CarouselComponent from "../responsive-components/carousel";
import styles from "./styles.scss";
import headingStyles from './../../lib/markdown/headingRenderer.scss'

const Carousel = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Carousel"} />

      <div className={styles.headingContainer}>
        <h3 className={headingStyles.headingContainer + " find_by_header"}
            id={"example"}>Example</h3></div>
      <div className={styles.container}>

        <CarouselComponent />
      </div>
      <Markdown source={standard} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Carousel;
