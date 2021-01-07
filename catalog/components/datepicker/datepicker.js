import React from 'react';
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import Modals from "../../zendesk/modals/modals";
import dateRange from './date-range/html/date-range.md'
import localisation from './localisation/html/localisation.md'
import singleDateSelector from './single-date-selector/html/single-date-selector.md'
import localisationExampleSweden from './localisation-example-sweden/html/localisation-example-sweden.md'

const markdown = dateRange + localisation + localisationExampleSweden + singleDateSelector

const Datepicker = () => {
  return (
    <React.Fragment>
      <PageHeader title={"Datepicker"} />
      <Markdown source={markdown} />
      <Modals uri={"uri"} />
    </React.Fragment>
  );
};

export default Datepicker;
