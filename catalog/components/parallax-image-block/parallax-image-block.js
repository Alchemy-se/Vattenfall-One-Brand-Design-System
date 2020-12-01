import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";
import parallaxImageBlock from './parallax-image-block/html/parallax-image-block.md'
const ParallaxImageBlock = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Parallax Image Block"} />
      <Markdown source={parallaxImageBlock} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default ParallaxImageBlock;
