import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import standardList from './standard-list/html/standard-list.md'
const NumberedList = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Numbered List"} />
      <Markdown source={ standardList} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default NumberedList;
