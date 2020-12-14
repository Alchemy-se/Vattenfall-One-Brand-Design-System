import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals";
import example from './example/html/example.md'

const ButtonGroup = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Colors"} />
      <Markdown source={example} />
      <Modals uri={uri} />
    </React.Fragment>
  )

};

export default ButtonGroup;
