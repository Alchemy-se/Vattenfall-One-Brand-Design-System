import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import parallaxImageBlock from './parallax-image-block/html/parallax-image-block.md'
const ParallaxImageBlock = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={'Parallax Image Block'} />
      <Markdown
        source={parallaxImageBlock}
        scriptUrl={'/js/parallax-image-block.min.js'}
      />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default ParallaxImageBlock;
