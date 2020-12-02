import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";
import basicExample from './basic-example/html/basic-example.md'

const Footer = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Footer"} />
      <Markdown source={basicExample} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Footer;
