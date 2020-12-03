import React, {Fragment} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals";
import BasicUpload from "./basic-example/html/basic-example.md";

const Upload = ({uri}) => {
  return (
     <Fragment>
      <PageHeader title={"Upload"}/>
        <Markdown source={BasicUpload} />
        <Modals uri={uri} />
     </Fragment>
  );
};

export default Upload;