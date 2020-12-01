import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";
import gdrpConcentModule from './gdpr-concent-module/html/gdpr-concent-module.md'
const GdprConcentModule = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"GDPR Concent Module"} />
      <Markdown source={gdrpConcentModule} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default GdprConcentModule;
