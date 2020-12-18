import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import datepicker from './datepicker.md'

// TODO add metadata to datepicker
const Datepicker = () => {
  return (
    <React.Fragment>
      <PageHeader title={"Card"}/>
      <Markdown source={datepicker} />
      <Modals uri={"uri"} />
    </React.Fragment>
  );
};

export default Datepicker;
