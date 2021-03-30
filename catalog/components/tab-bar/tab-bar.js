import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import tabBar from './tab-bar/html/tab-bar.md'
import tabBarMobileScrollable from "./tab-bar-mobile-scrollable/html/tab-bar-mobile-scrollable.md"
import tabBarMobileFixed from './tab-bar-mobile-fixed/html/tab-bar-mobile-fixed.md'

const markdown = tabBar + tabBarMobileFixed + tabBarMobileScrollable

const TabBar = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Tab Bar"} />
      <Markdown source={markdown} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default TabBar;
