import React, { useState } from "react";
import colors from './colors/html/colors.md'
import borders from './borders/html/borders.md'
import backgroundColor from './background-color/html/background-color.md'
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals/modals";

const markdown = colors + backgroundColor + borders


const Colors = ({ uri }) => {
  return (
    <React.Fragment>
      <PageHeader title={"Colors"} />
      <Markdown source={markdown} />
      <Modals uri={uri} />
    </React.Fragment>
  )

};
export default Colors
