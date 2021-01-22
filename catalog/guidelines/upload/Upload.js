import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import Markdown from '../../lib/markdown';
import GuidelinesBlock from "../guidelinesBlock";
import UploadMd from "../../components/upload/basic-example/html/basic-example.md";
import DragNDropMd from "../../components/upload/drag-and-drop/html/drag-and-drop.md";
import DottedDescription from "../DottedDescription";

const Upload = () => {
  const editMd = (mdText) => {
    const hideSourceCode = mdText.replace("showSource: true", "showSource: false");
    const removeH3 = hideSourceCode.substring(hideSourceCode.indexOf("\n") + 1);
    return removeH3;
  }
  return (
    <Fragment>
    <PageHeader title="Upload" />
    <section className="p-2 vf-border-top-gray-200"></section>
    <p>File uploaders allow users to upload content of their own. A file uploader is commonly found in forms, but can also live as a standalone element.</p>
    <DottedDescription
        title="When to use"
        dottedLines={["Uploading one or more files.",
            "Uploading files by dragging and dropping.", "Showing the process of uploading."]}
      />
      <div className="row" style={{marginBottom: "100px"}}>
        <div className="col">
          <p>A file uploader traditionally uploads one or more files by clicking an action button that prompts a file selection dialog. Once you have selected one or more files from the dialog, the selected files will populate below the file uploader on the page. To remove an uploaded file, click the “x” (or close) icon.</p>
        </div>
        <div className="col">
          <h4>Placement</h4>
          <p>Center align the button or drop zone area with the uploaded files. Multiple files will stack vertically. Use a tertiary button for the file uploader so it does not conflict with the primary action.</p>
        </div>
        <div className="col">
          <h4>Drag and drop file uploader</h4>
          <p>Drag and drop file uploaders are used to directly upload files by dragging and dropping them into a drop zone area. When dragging files into the drop zone area, the drop zone border changes in color and to indicate the area has been activated and is ready for files. </p>
        </div>
        <div className="col">
          <h4>Validation</h4>
          <p>When a specific file cannot be uploaded successfully it will show an error state. Error messages should provide clear guidance to help the user resolve the error.</p>
        </div>
      </div>
   
      <GuidelinesBlock 
        title="Basic upload example" 
        text="Text about upload.."
      >
        <Markdown source={editMd(UploadMd)} />
      </GuidelinesBlock>
      <GuidelinesBlock 
        title="Drag and drop" 
        text="Text about drag and drop upload.."
      >
        <Markdown source={editMd(DragNDropMd)} />
      </GuidelinesBlock>
    </Fragment>

  );
};

export default Upload;