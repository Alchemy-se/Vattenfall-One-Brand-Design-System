import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";

import cookieBanner from './cookie-banner/html/cookie-banner.md'
const CookieBanner = ({uri}) => {
  return (
    <React.Fragment>
      <PageHeader title={"Cookie banner"} />
      <Markdown source={cookieBanner} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default CookieBanner;
