import React from 'react';
import badge from './example/html/badge.md'
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";

const Badge = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Badge"} />
      <Markdown source={badge} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Badge;
