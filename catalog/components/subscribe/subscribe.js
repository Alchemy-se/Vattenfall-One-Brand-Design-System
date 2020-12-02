import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";
import standard from './standard/html/standard.md'
const Subscribe = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Subscribe"} />
      <Markdown source={standard} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Subscribe;
