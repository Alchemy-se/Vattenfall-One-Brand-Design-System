import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import standard from './standard/html/standard.md'
const Form = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Form"} />
      <Markdown source={standard} />
      <Modals uri={uri} />
    </React.Fragment>
  )
};

export default Form;
