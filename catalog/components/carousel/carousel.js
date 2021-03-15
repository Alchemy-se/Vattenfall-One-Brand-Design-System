import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import standard from './standard/html/carousel.md'
import CarouselComponent from "../exclude-from-metadata/responsive-components/carousel";
import styles from "./styles.scss";
import headingStyles from './../../lib/markdown/headingRenderer.scss'
import { HeadingHashLink } from "../../lib/markdown/headingRenderer";
import { Anchor } from "antd";

const { Link } = Anchor;
const Carousel = ({ uri }) => {


  return (
    <React.Fragment>
      <PageHeader title={'Carousel'} />

      <div className={styles.headingContainer}>
        <h3
          className={headingStyles.headingContainer + ' find_by_header'}
          id={'example'}
        >
          Example
          {HeadingHashLink('example')}
        </h3>
      </div>
      <div className={styles.container}>
        <div className={styles.anchorContainer}>
          <Anchor
            targetOffset={100}
            getContainer={() => document.getElementById('content-container')}
            showInkInFixed={true}
            affix={true}
          >
            <Link
              href={'#example'}
              title={'Example'}
              key={'anchor-' + 'example'}
            />
          </Anchor>
        </div>

        <CarouselComponent />
      </div>

      <Markdown source={standard} />
      <Modals uri={uri} scriptUrl={'/js/carousel.min.js'} />
    </React.Fragment>
  )
};

export default Carousel;
