import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import tabBar from './tab-bar/html/tab-bar.md'
import InChargeScrollableTabBar from "./incharge-scrollable-tab-bar/html/incharge-scrollable-tab-bar.md"
import InChargeFixeTabBar from "./incharge-fixed-tab-bar/html/incharge-fixed-tab-bar.md"

const markdown = tabBar + InChargeFixeTabBar + InChargeScrollableTabBar

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
