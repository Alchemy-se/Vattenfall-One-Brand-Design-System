import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import tabBar from './tab-bar/html/tab-bar.md'
const TabBar = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Tab Bar"} />
      <Markdown source={tabBar} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default TabBar;
