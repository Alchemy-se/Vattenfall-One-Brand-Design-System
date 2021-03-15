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
      <PageHeader title={'Upload'} />
      {/* <DragAndDropTest /> */}
      <Markdown source={markdown} scriptUrl={'/js/upload.min.js'} />
      <Modals uri={uri} />
    </Fragment>
  )
};

export default Upload;