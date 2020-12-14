import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import notificationModule from './notification-module/html/notification-module.md'

const NotificationModule = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Notification Module"} />
      <Markdown source={notificationModule} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default NotificationModule;
