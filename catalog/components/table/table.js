import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";
import table from './table/html/table.md'
const Table = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Table"} />
      <Markdown source={table} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Table;
