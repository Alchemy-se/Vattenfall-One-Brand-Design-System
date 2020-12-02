import React, { Component } from "react";
import PageHeader from "../../lib/pageHeader";
import Markdown from "../../lib/markdown";
import example from './example/html/example.md'
import asALink from './as-a-link/html/as-a-link.md'
import Modals from "../../zendesk/modals";
const markdown = example + asALink;

const Card = ({uri}) => {
    return (
      <React.Fragment>
        <PageHeader title={"Card"}/>
        <Markdown source={markdown} />
        <Modals uri={uri} />
      </React.Fragment>
    )

};
export default Card;
