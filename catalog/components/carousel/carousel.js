import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import standard from './standard/html/carousel.md'

const Carousel = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Carousel"} />
      <Markdown source={standard} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Carousel;
