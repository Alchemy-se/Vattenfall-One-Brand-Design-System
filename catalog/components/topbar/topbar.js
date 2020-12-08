import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import topBar from './topbar/html/topbar.md'
const TopBar = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Top bar"} />
      <Markdown source={topBar} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default TopBar;
