import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";
import gpdrConsentModule from './gdpr-concent-module/html/gdpr-concent-module.md'
const GDPRConsentModule = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"GDPR Consent Module"} />
      <Markdown source={gpdrConsentModule} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default GDPRConsentModule;
