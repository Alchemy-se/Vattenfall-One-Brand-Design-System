import React, {Fragment} from "react";
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import Modals from "../../zendesk/modals";
import BasicUpload from "./basic-example/html/basic-example.md";
import DragAndDrop from "./drag-and-drop/html/drag-and-drop.md";

const markdown = BasicUpload + DragAndDrop;
const Upload = ({uri}) => {
  return (
     <Fragment>
      <PageHeader title={"Upload"}/>
        <Markdown source={markdown} />
        <Modals uri={uri} />
     </Fragment>
  );
};

export default Upload;