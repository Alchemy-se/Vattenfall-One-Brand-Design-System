import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import example from './example/html/example.md'
import mobile from "./mobile/html/mobile.md"

const ButtonGroup = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Button Group"} />
      <Markdown source={example + mobile} />
      <Modals uri={uri} />
    </React.Fragment>
  )

};

export default ButtonGroup;
